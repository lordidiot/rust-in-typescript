import { AbstractParseTreeVisitor, ParserRuleContext, ParseTree, TerminalNode } from "antlr4ng";
import { ArithmeticOrLogicalExpressionContext, AssignmentExpressionContext, BlockExpressionContext, BorrowExpressionContext, CallExpressionContext, CrateContext, DereferenceExpressionContext, ExpressionContext, Function_Context, IfExpressionContext, LetStatementContext, LiteralExpression_Context, LiteralExpressionContext, LoopExpressionContext, MatchExpressionContext, PathExpression_Context, PathExpressionContext, StatementContext, StatementsContext, Type_Context } from "./parser/src/RustParser";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { Bytecode, ADD, SUB, MUL, DIV, MOD, ENTER_SCOPE, EXIT_SCOPE, GET, SET, POP, FREE, DEREF, WRITE, LDCP, Value, JOFR, GOTOR, RET, CALL, DONE } from "./RustVirtualMachine";
import { cloneDeep } from "lodash-es";

// https://www.digitalocean.com/community/tutorials/typescript-module-augmentation
declare module "antlr4ng" {
    interface ParserRuleContext {
        type?: RustType;
    }

    interface ParseTree {
        type?: RustType;
    }
}

const UNIT_TYPE = "()"
interface Ref { kind: "ref"; target: RustType; }
interface MutRef { kind: "mutRef"; target: RustType; }
type FnType = { kind: "fn"; paramNames: string[], paramTypes: RustType[]; ret: RustType };
type PrimitiveType = "i32" | "u32" | "()" | "bool";
type RustType =
  | FnType
  | PrimitiveType 
  | Ref
  | MutRef;

function typeEqual(a: RustType, b: RustType): boolean {
    if (a === b) return true;
    if (typeof a === "string" && typeof b === "string") {
        return a === b;
    } else if (typeof a === "string" || typeof b === "string") {
        return false;
    } else {
        if (a.kind !== b.kind) return false;
        if (a.kind === "fn" && b.kind === "fn") { // Second comparison redundant, but for TS
            if (a.paramTypes.length !== b.paramTypes.length) return false;
            for (let i = 0; i < a.paramTypes.length; i++) {
                if (!typeEqual(a.paramTypes[i], b.paramTypes[i])) return false;
            }
            if (!typeEqual(a.ret, b.ret)) return false;
            return true;
        } else { // Ref, MutRef
            // @ts-ignore
            return typeEqual(a.target, b.target);
        }
    }
}

function isPrimitive(type: RustType): type is PrimitiveType {
    return typeof type === "string";
}

function isRef(type: RustType): type is Ref | MutRef {
    return !isPrimitive(type) && (type.kind === "ref" || type.kind === "mutRef");
}


function isCopySemantics(type: RustType): boolean {
    // Only primitive types (i32, u32, and unit)
    // and immutable references are copy semantics
    return isPrimitive(type) || type.kind == "ref";
}

function isMoveSemantics(type: RustType): boolean {
    return !isCopySemantics(type);
}

type UsageMap = Map<string, number>;

function countVariableUsages(ctx: ParseTree): UsageMap {
    const map = new Map<string, number>();

    function visit(node: ParseTree) {
        if (node instanceof PathExpressionContext) {
            const name = node.getText();
            map.set(name, (map.get(name) ?? 0) + 1);
        }
        for (let i = 0; i < node.getChildCount(); i++) {
            visit(node.getChild(i));
        }
    }

    visit(ctx);
    return map;
}

type ScanResults = {
    names: string[];
    types: RustType[];
}
const EMPTY_SCAN_RESULTS: ScanResults = { names: [], types: [] };

class LocalScannerVisitor extends AbstractParseTreeVisitor<ScanResults> implements RustParserVisitor<ScanResults> {
    selfContext: ParserRuleContext;
    usageMap: UsageMap;

    constructor(selfContext: ParserRuleContext, usageMap: UsageMap) {
        super();
        this.selfContext = selfContext;
        this.usageMap = usageMap;
    }

    defaultResult(): ScanResults {
        return EMPTY_SCAN_RESULTS;
    }

    aggregateResult(aggregate: ScanResults, nextResult: ScanResults | null): ScanResults {
        if (nextResult !== null) {
            return {
                names: aggregate.names.concat(nextResult.names),
                types: aggregate.types.concat(nextResult.types)
            };
        }
        return aggregate;
    };

    visitFunction_(ctx: Function_Context): ScanResults {
        const fnName = ctx.identifier().getText();
        let paramNames = [];
        let paramTypes = [];
        if (ctx.functionParameters() !== null) {
            ctx.functionParameters().functionParam().forEach((param) => {
                paramNames.push(param.identifier().getText());
                paramTypes.push(this.parseType(param.type_()));
            });
        }
        const returnType =
            ctx.functionReturnType() !== null
            ? this.parseType(ctx.functionReturnType().type_())
            : UNIT_TYPE;
        return {
            names: [fnName],
            types: [{ kind: "fn", paramNames, paramTypes, ret: returnType }]
        }
    }

    visitBlockExpression(ctx: BlockExpressionContext): ScanResults {
        if (ctx !== this.selfContext) {
            return EMPTY_SCAN_RESULTS;
        }
        return this.visitChildren(ctx);
    }

    visitIfExpression(ctx: IfExpressionContext): ScanResults {
        if (ctx !== this.selfContext) {
            return EMPTY_SCAN_RESULTS;
        }
        return this.visitChildren(ctx);
    }

    visitLoopExpression(ctx: LoopExpressionContext): ScanResults {
        if (ctx !== this.selfContext) {
            return EMPTY_SCAN_RESULTS;
        }
        return this.visitChildren(ctx);
    }

    visitMatchExpression(ctx: MatchExpressionContext): ScanResults {
        if (ctx !== this.selfContext) {
            return EMPTY_SCAN_RESULTS;
        }
        return this.visitChildren(ctx);
    }

    private parseType(ctx: Type_Context): RustType {
        if (ctx.unit_type()) {
            return "()";
        }
        if (ctx.referenceType()) {
            if (ctx.referenceType().KW_MUT()) {
                return { kind: "mutRef", target: this.parseType(ctx.referenceType().type_()) };
            }
            return { kind: "ref", target: this.parseType(ctx.referenceType().type_()) };
        } else if (ctx.identifier()) {
            return ctx.identifier().getText() as PrimitiveType;
        }
    }

    visitLetStatement(ctx: LetStatementContext): ScanResults {
        // // TODO: Error on case where type annotation is not present
        const name = ctx.identifierPattern().identifier().getText();
        const type = this.parseType(ctx.type_());
        return {
            names: [name],
            types: [type]
        };
    }
}

class TypeEnvironment {
    types: Map<string, RustType>;

    constructor(locals: ScanResults | null = null, existingTypes: Map<string, RustType> | null = null) {
        if (existingTypes !== null) {
            this.types = cloneDeep(existingTypes);
        } else {
            this.types = new Map();
        }
        if (locals !== null) {
            for (let i = 0; i < locals.names.length; i++) {
                this.types.set(locals.names[i], locals.types[i]);
            }
        }
        // Debug
        // console.log("New type environment");
        // console.log(this.types);
    }

    extend(locals: ScanResults): TypeEnvironment {
        return new TypeEnvironment(locals, this.types);
    }

    lookupType(name: string): RustType | null {
        const type = this.types.get(name);
        if (type !== undefined) {
            return type;
        }
        return null;
    }
}

export class RustTypeCheckerVisitor extends AbstractParseTreeVisitor<RustType> implements RustParserVisitor<RustType> {
    typeEnv: TypeEnvironment;

    constructor() {
        super();
        // this.typeEnv = new TypeEnvironment();
    }

    private getNonTokenChildren(node: ParseTree): ParseTree[] {
        let children: ParseTree[] = [];
        for (let i = 0; i < node.getChildCount(); i++) {
            const child = node.getChild(i);
            if (!(child instanceof TerminalNode)) {
                children.push(child);
            }
        }
        return children;
    }

    visitChildren(node: ParseTree): RustType {
        super.visitChildren(node);
        const children = this.getNonTokenChildren(node);
        if (children.length === 1) {
            node.type = children[0].type;
            return node.type;
        } else {
            console.log(node);
            throw new Error(`Unimplemented: ${node.getText()}`);
        }
    }

    private withNewEnvironment(ctx: ParserRuleContext, fn: () => RustType, scanResults: ScanResults = null): RustType {
        // TODO: Error on duplicate variable names
        if (scanResults === null) {
            const usageMap = countVariableUsages(ctx);
            scanResults = new LocalScannerVisitor(ctx, usageMap).visit(ctx);
        }
        const previousEnv = this.typeEnv;
        this.typeEnv = this.typeEnv.extend(scanResults);
        
        try {
            return fn();
        } finally {
            this.typeEnv = previousEnv;
        }
    }

    visitCrate(ctx: CrateContext): RustType {
        const usageMap = new Map();
        const scanResults = new LocalScannerVisitor(ctx, usageMap).visit(ctx);
        // Crate-level scope type environment
        this.typeEnv = new TypeEnvironment(scanResults);
        ctx.function_().forEach((fn: Function_Context) => {
            this.visit(fn);
        });
        ctx.type = UNIT_TYPE;
        return ctx.type;
    }

    visitFunction_(ctx: Function_Context): RustType {
        const name = ctx.identifier().getText();
        const fnType = this.typeEnv.lookupType(name);
        if (typeof fnType === "string" || fnType.kind !== "fn") {
            throw new Error(`Something wrong, expected function type, found ${JSON.stringify(fnType)}. Line ${ctx.start.line}`);
        }
        const bodyType = this.withNewEnvironment(ctx, () => {
            return this.visit(ctx.blockExpression());
        }, { // Custom scanResults
            names: fnType.paramNames,
            types: fnType.paramTypes
        });
        if (!typeEqual(bodyType, fnType.ret)) {
            throw new Error(`mismatched types, expected ${JSON.stringify(fnType.ret)}, found ${JSON.stringify(bodyType)}. Line ${ctx.start.line}`);
        }
        ctx.type = UNIT_TYPE;
        return ctx.type;
    }

    visitCallExpression(ctx: CallExpressionContext): RustType {
        let fnType = this.visit(ctx.expression());
        if (typeof fnType === "string" || fnType.kind !== "fn") {
            throw new Error(`expected function, found ${JSON.stringify(fnType)}. Line ${ctx.start.line}`);
        }
        const argTypes =
            ctx.callParams() !== null
            ? ctx.callParams().expression().map((expr) => this.visit(expr))
            : [];
        if (argTypes.length !== fnType.paramTypes.length) {
            throw new Error(`this function takes ${fnType.paramTypes.length} arguments but ${argTypes.length} were supplied. Line ${ctx.start.line}`);
        }
        for (let i = 0; i < argTypes.length; i++) {
            if (!typeEqual(argTypes[i], fnType.paramTypes[i])) {
                throw new Error(`mismatched types, expected ${JSON.stringify(fnType.paramTypes[i])}, found ${JSON.stringify(argTypes[i])}. Line ${ctx.start.line}`);
            }
        }
        ctx.type = fnType.ret;
        return ctx.type;
    }

    visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): RustType {
        const leftType = this.visit(ctx.getChild(0));
        const rightType = this.visit(ctx.getChild(2));
        if (!typeEqual(leftType, rightType)) {
            console.log("context", ctx.getText());
            throw new Error(`Type error: ${JSON.stringify(leftType)} and ${JSON.stringify(rightType)} are not compatible. Line ${ctx.start.line}`);
        }
        ctx.type = leftType;
        return ctx.type;
    }

    visitStatements(ctx: StatementsContext): RustType {
        if (ctx.statement() !== null) {
            ctx.statement().forEach((statement: StatementContext) => {
                this.visit(statement);
            });
        }
        if (ctx.expression() !== null) {
            ctx.type = this.visit(ctx.expression());
        } else {
            ctx.type = UNIT_TYPE;
        }
        return ctx.type;
    }

    visitBlockExpression(ctx: BlockExpressionContext): RustType {
        return this.withNewEnvironment(ctx, () => {
            ctx.type = this.visit(ctx.statements());
            return ctx.type;
        });
    }

    visitPathExpression(ctx: PathExpressionContext): RustType {
        const name = ctx.getText();
        const type = this.typeEnv.lookupType(name);
        if (type === null) {
            throw new Error(`Variable ${name} not found in environment, this should not happen`);
        }
        ctx.type = type;
        return ctx.type;
    }

    visitPathExpression_(ctx: PathExpression_Context): RustType {
        ctx.type = this.visit(ctx.pathExpression());
        return ctx.type;
    }

    visitLiteralExpression(ctx: LiteralExpressionContext): RustType {
        if (ctx.INTEGER_LITERAL()) { // TODO: Could be u32
            ctx.type = "i32";
            return ctx.type;
        } else if (ctx.KW_TRUE() || ctx.KW_FALSE()) {
            ctx.type = "bool";
            return ctx.type;
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }

    private isLValue(ctx: ExpressionContext): boolean {
        if (ctx === null) {
            return false;
        } else if (ctx instanceof PathExpressionContext || ctx instanceof PathExpression_Context) {
            return true;
        } else if (ctx instanceof DereferenceExpressionContext) {
            return this.isLValue(ctx.expression());
        }
        return false;
    }

    visitLetStatement(ctx: LetStatementContext): RustType {
        const name = ctx.identifierPattern().identifier().getText();
        const type = this.typeEnv.lookupType(name);
        if (type === null) {
            throw new Error(`Variable ${name} not found in environment, this should not happen`);
        }
        if (ctx.expression() === null) {
            ctx.type = UNIT_TYPE;
            return ctx.type;
        }
        const exprType = this.visit(ctx.expression());
        if (!typeEqual(type, exprType)) {
            throw new Error(`mismatched types.\n Debug: ${JSON.stringify(type)} and ${JSON.stringify(exprType)}. Line ${ctx.start.line}`);
        }
        ctx.type = UNIT_TYPE;
        return ctx.type;
    }

    visitAssignmentExpression(ctx: AssignmentExpressionContext) : RustType {
        if (!this.isLValue(ctx.expression(0))) {
            throw new Error(`invalid left-hand side of assignment: ${ctx.expression(0).getText()}`);
        }
        const leftType = this.visit(ctx.getChild(0));
        const rightType = this.visit(ctx.getChild(2));
        if (!typeEqual(leftType, rightType)) {
            throw new Error(`mismatched types.\n Debug: ${JSON.stringify(leftType)} and ${JSON.stringify(rightType)}. Line ${ctx.start.line}`);
        }
        ctx.type = UNIT_TYPE;
        return ctx.type;
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): RustType {
        if (!this.isLValue(ctx.expression())) {
            throw new Error(`borrowing from invalid lvalue: ${ctx.expression().getText()}`);
        }
        const expressionType = this.visit(ctx.expression());
        ctx.type = { kind: ctx.KW_MUT() ? "mutRef" : "ref", target: expressionType };
        return ctx.type
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): RustType {
        const expressionType = this.visit(ctx.expression());
        if (isRef(expressionType)) {
            ctx.type = expressionType.target;
            return ctx.type;
        }
        throw new Error(`type ${expressionType} cannot be dereferenced. Line ${ctx.start.line}`);
    }

    visitIfExpression(ctx: IfExpressionContext): RustType {
        const conditionType = this.visit(ctx.expression());
        if (!typeEqual(conditionType, "bool")) {
            throw new Error(`mismatched types, expected \`bool\`, found ${conditionType}. Line ${ctx.start.line}`);
        }
        let types = [];
        for (const block of ctx.blockExpression()) {
            types.push(this.visit(block));
        }
        if (ctx.ifExpression() !== null) { // `else if` branch
            types.push(this.visit(ctx.ifExpression()));
        }
        for (let i = 1; i < types.length; i++) {
            if (!typeEqual(types[i], types[0])) {
                throw new Error(`\`if\` and \`else\` have incompatible types. Line ${ctx.start.line}`);
            }
        }
        ctx.type = types[0];
        return ctx.type;
    }
}

// Each CompilerEnvironment has a 1-to-1 mapping to a Rust scope.
// At runtime, the environment will be used to look up variables.
type EnvironmentPosition = {
    frameIndex: number; // Starting from 0, counting from the top of the stack
    localIndex: number; // Index into the locals array
}

class CompilerEnvironment {
    locals: string[];
    parent: CompilerEnvironment | null;

    constructor(parent: CompilerEnvironment | null = null, locals: string[] = []) {
        this.locals = locals;
        this.parent = parent;
    }

    extend(locals: string[]): CompilerEnvironment {
        return new CompilerEnvironment(this, locals);
    }

    lookupPosition(name: string): EnvironmentPosition | null {
        const localIndex = this.locals.indexOf(name);
        if (localIndex !== -1) {
            return { frameIndex: 0, localIndex };
        }
        // Recursively check the parent environment
        let envPos = this.parent?.lookupPosition(name);
        if (envPos !== null) {
            envPos.frameIndex++;
        }
        return envPos;
    }

    lookupName(pos: EnvironmentPosition): string | null {
        let currentEnv: CompilerEnvironment | null = this;
        let framesToClimb = pos.frameIndex;
        
        // Walk up the environment chain to find the correct frame
        while (framesToClimb > 0 && currentEnv !== null) {
            currentEnv = currentEnv.parent;
            framesToClimb--;
        }
        
        // Check if we found the correct environment frame
        if (currentEnv === null || framesToClimb > 0) {
            return null; // Frame index out of bounds
        }
        
        // Check if local index is valid
        if (pos.localIndex < 0 || pos.localIndex >= currentEnv.locals.length) {
            return null; 
        }
        
        return currentEnv.locals[pos.localIndex];
    }
}

class BorrowChecker {
    static borrowCheck(name: string, env: TypeEnvironment) {
        const type = env.lookupType(name);
        if (type.kind === "readRef") {
            BorrowChecker.borrowRead(type.owner, env);
        } else if (type.kind === "writeRef"){
            BorrowChecker.borrowWrite(type.owner, env);
        }
    }

    static borrowRead(ownerName: string, env: TypeEnvironment) {
        const owner = env.lookupType(ownerName);
        if (!owner || owner.kind !== "owned") {
            throw new Error(`Cannot create read reference: ${ownerName} is not an owned value`);
        }
        if (owner.writeRefs > 0) {
            throw new Error(`Cannot borrow ${ownerName} as immutable because it is already borrowed mutably`);
        }
        owner.readRefs++;
        return;
    }

    static borrowWrite(ownerName: string, env: TypeEnvironment) {
        const owner = env.lookupType(ownerName);
        
        if (!owner || owner.kind !== "owned") {
            throw new Error(`Cannot create mutable reference: ${ownerName} is not an owned value`);
        }
        if (owner.readRefs > 0 || owner.writeRefs > 0) {
            throw new Error(`Cannot borrow ${ownerName} as mutable because it is already borrowed`);
        }
        owner.writeRefs++;
        return;
    }

    static freeCheck(name: string, env: TypeEnvironment): boolean {
        const type = env.lookupType(name);
        if (type.kind === "readRef") {
            type.isAlive = false;
            const ownerName = type.owner;
            const owner = env.lookupType(ownerName);
            if(owner.kind !== "owned") {
                throw new Error(`Owner ${ownerName} must be of type owned.`);
            }
            owner.readRefs--;
            return true;

        } else if (type.kind === "writeRef"){
            type.isAlive = false;
            const ownerName = type.owner;
            const owner = env.lookupType(ownerName);
            if(owner.kind !== "owned") {
                throw new Error(`Owner ${ownerName} must be of type owned.`);
            }
            owner.readRefs--;
            return true;
        } else if (type.kind === "owned") {
            if (type.lifetimeCount === 0 && type.readRefs === 0 && type.writeRefs === 0) {
                type.isAlive = false;
                return true;
            }
        }
        return false;
    }

}

export class RustCompilerVisitor extends AbstractParseTreeVisitor<void> implements RustParserVisitor<void> {
    compilerEnv: CompilerEnvironment;
    typeEnv: TypeEnvironment;
    bytecode: Bytecode[];

    constructor() {
        super();
        // this.compilerEnv = new CompilerEnvironment();
        // this.typeEnv = new TypeEnvironment();
        this.bytecode = [];
    }

    private visitAndGetBytecodeSize(tree: ParseTree): number {
        const pre = this.bytecode.length;
        this.visit(tree);
        const post = this.bytecode.length;
        return post - pre;
    }

    private withNewEnvironment(ctx: ParserRuleContext, fn: () => void, scanResults: ScanResults = null): void {
        // TODO: Error on duplicate variable names
        if (scanResults === null) {
            const usageMap = countVariableUsages(ctx);
            scanResults  = new LocalScannerVisitor(ctx, usageMap).visit(ctx);
        }
        const previousEnv = this.compilerEnv;
        const prevTypes = this.typeEnv;

        this.compilerEnv = this.compilerEnv.extend(scanResults.names);
        this.typeEnv = this.typeEnv.extend(scanResults);

        try {
            this.bytecode.push(ENTER_SCOPE(scanResults.names.length));
            fn();
            this.bytecode.push(EXIT_SCOPE());
        } finally {
            this.compilerEnv = previousEnv;
            this.typeEnv = prevTypes;
        }
    }

    visitCrate(ctx: CrateContext): void {
        const usageMap = new Map();
        const scanResults = new LocalScannerVisitor(ctx, usageMap).visit(ctx);
        // Crate-level scope environment
        this.compilerEnv = new CompilerEnvironment(null, scanResults.names);
        this.typeEnv = new TypeEnvironment(scanResults);
        ctx.function_().forEach((fn: Function_Context) => {
            this.visit(fn);
        });
        // Every program starts by calling main()
        const mainEnvPos = this.compilerEnv.lookupPosition("main");
        if (mainEnvPos === null) { // TODO: In type checker too
            throw new Error(`Main function not found`);
        }
        this.bytecode.push(GET(mainEnvPos.frameIndex, mainEnvPos.localIndex, 0));
        this.bytecode.push(CALL());
        this.bytecode.push(DONE());
    }

    visitFunction_(ctx: Function_Context): void {
        const gotor = GOTOR(0);
        if (gotor.type !== "GOTOR") throw new Error("This never happens"); // For type assertion
        this.bytecode.push(gotor);
        const fnAddress = this.bytecode.length;
        const name = ctx.identifier().getText();
        const fnType = this.typeEnv.lookupType(name);
        if (isPrimitive(fnType) || fnType.kind !== "fn") {
            throw new Error(`Something wrong, expected function type, found ${JSON.stringify(fnType)}. Line ${ctx.start.line}`);
        }
        this.withNewEnvironment(ctx, () => {
            // Pop arguments in reversed-order
            fnType.paramNames.toReversed().forEach((name: string) => {
                const envPos = this.compilerEnv.lookupPosition(name);
                this.bytecode.push(SET(envPos.frameIndex, envPos.localIndex, 0));
                this.bytecode.push(POP());
            });
            this.visit(ctx.blockExpression());
        }, {
            names: fnType.paramNames,
            types: fnType.paramTypes
        });
        this.bytecode.push(RET());
        const fnSize = this.bytecode.length - fnAddress;
        gotor.skip = fnSize;
        const envPos = this.compilerEnv.lookupPosition(name);
        if (envPos === null) {
            throw new Error(`Function ${name} not found in environment, this should not happen`);
        }
        this.bytecode.push(LDCP(Value.fromu32(fnAddress)));
        this.bytecode.push(SET(envPos.frameIndex, envPos.localIndex, 0));
        this.bytecode.push(POP());
    }

    visitCallExpression(ctx: CallExpressionContext): void {
        if (ctx.callParams() !== null) {
            ctx.callParams().expression().forEach((expr: ExpressionContext) => {
                this.visit(expr);
            });
        }
        this.visit(ctx.expression());
        this.bytecode.push(CALL());
    }

    visitBlockExpression(ctx: BlockExpressionContext): void {
        this.withNewEnvironment(ctx, () => {
            return this.visitChildren(ctx);
        });
    }

    visitStatements(ctx: StatementsContext): void {
        ctx.statement().forEach((statement: StatementContext) => {
            this.visit(statement);
            this.bytecode.push(POP()); // TODO: Whether to free or not
        });
        if (ctx.expression() !== null) {
            this.visit(ctx.expression());
        }
    }

    visitLetStatement(ctx: LetStatementContext): void {
        const name = ctx.identifierPattern().identifier().getText();
        const envPos = this.compilerEnv.lookupPosition(name);
        const type = this.typeEnv.lookupType(name);
        if (envPos === null) {
            throw new Error(`Variable ${name} not found in environment, this should not happen`);
        }
        if (ctx.expression() === null) {
            return; // `let x;` style statement
        }
        this.visit(ctx.expression());
        this.bytecode.push(SET(envPos.frameIndex, envPos.localIndex, 0));
    }

    private visitLValueExpression(ctx: ExpressionContext): void {
        if (ctx instanceof PathExpressionContext || ctx instanceof PathExpression_Context) {
            const name = ctx.getText();
            const envPos = this.compilerEnv.lookupPosition(name);
            const type = this.typeEnv.lookupType(name);
            if (envPos === null) {
                throw new Error(`Variable ${name} not found in environment, this should not happen`);
            }
            this.bytecode.push(GET(envPos.frameIndex, envPos.localIndex, -1)); // push address of variable
        } else if (ctx instanceof DereferenceExpressionContext) {
            this.visitLValueExpression(ctx.expression());
            this.bytecode.push(DEREF());
        } else {
            console.log(ctx);
            throw new Error(`Invalid left-hand side of assignment: ${ctx.getText()}`);
        }
    }

    visitDereferenceExpression(ctx: DereferenceExpressionContext): void {
        this.visit(ctx.expression());
        this.bytecode.push(DEREF());
    }

    visitAssignmentExpression(ctx: AssignmentExpressionContext): void {
        this.visitLValueExpression(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.bytecode.push(WRITE());
    }

    // Returns EnvironmentPosition and indirection level
    private reduceBorrowExpression(ctx: ExpressionContext): [EnvironmentPosition, number] {
        if (ctx instanceof PathExpressionContext || ctx instanceof PathExpression_Context) {
            const name = ctx.getText();
            const envPos = this.compilerEnv.lookupPosition(name);
            return [envPos, 0];
        } else if (ctx instanceof DereferenceExpressionContext) {
            let res = this.reduceBorrowExpression(ctx.expression());
            res[1]++;
            return res;
        }
        throw new Error(`Invalid left-hand side of borrow: ${ctx.getText()}`);
    }

    visitBorrowExpression(ctx: BorrowExpressionContext): void {
        const [envPos, indirection] = this.reduceBorrowExpression(ctx.expression());
        // TODO: The -1 depends on the type of the borrowed expression
        // If it is a primitive or reference, then -1
        // If it is a complex/owned type, then 0, since the type is already an address
        this.bytecode.push(GET(envPos.frameIndex, envPos.localIndex, indirection - 1));
    }

    visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): Bytecode[] {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        if (ctx.PLUS()) {
            this.bytecode.push(ADD());
            return;
        } 
        throw new Error("Not implemented (visitArithmeticOrLogicalExpression)");
    }

    // TODO: Too naive, doesn't handle a.b.c style statements
    visitPathExpression(ctx: PathExpressionContext): void {
        const name = ctx.getText();
        const pos = this.compilerEnv.lookupPosition(name);
        const type = this.typeEnv.lookupType(name);
        this.bytecode.push(GET(pos.frameIndex, pos.localIndex, 0)); // TODO: Indirection should depend on type
    }

    visitLiteralExpression(ctx: LiteralExpressionContext): void {
        if (ctx.INTEGER_LITERAL()) {
            const int = parseInt(ctx.INTEGER_LITERAL().getText(), 10);
            const value = Value.fromi32(int);
            this.bytecode.push(LDCP(value));
            return;
        } else if (ctx.KW_TRUE()) {
            this.bytecode.push(LDCP(Value.fromBool(true)));
            return;
        } else if (ctx.KW_FALSE()) {
            this.bytecode.push(LDCP(Value.fromBool(false)));
            return;
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }

    visitIfExpression(ctx: IfExpressionContext): void {
        this.visit(ctx.expression());
        const jofr = JOFR(0);
        const gotor = GOTOR(0);
        if (jofr.type !== "JOFR" || gotor.type !== "GOTOR") {
            throw new Error("This never happens"); // For type assertion
        }
        this.bytecode.push(jofr);
        let ifBranchSize = this.visitAndGetBytecodeSize(ctx.blockExpression(0));
        if (ctx.KW_ELSE()) {
            let elseBranchSize;
            ifBranchSize += 1; // For the GOTOR
            this.bytecode.push(gotor);
            if (ctx.ifExpression() !== null) {
                elseBranchSize = this.visitAndGetBytecodeSize(ctx.ifExpression());
            } else {
                elseBranchSize = this.visitAndGetBytecodeSize(ctx.blockExpression(1));
            }
            gotor.skip = elseBranchSize;
        }
        jofr.skip = ifBranchSize;
    }
}
