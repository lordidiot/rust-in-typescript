import { AbstractParseTreeVisitor, ParserRuleContext, ParseTree } from "antlr4ng";
import { ArithmeticOrLogicalExpressionContext, AssignmentExpressionContext, BlockExpressionContext, BorrowExpressionContext, DereferenceExpressionContext, ExpressionContext, IfExpressionContext, LetStatementContext, LiteralExpressionContext, LoopExpressionContext, MatchExpressionContext, PathExpression_Context, PathExpressionContext, StatementContext, StatementsContext, Type_Context } from "./parser/src/RustParser";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { Bytecode, ADD, SUB, MUL, DIV, MOD, LDCI, ENTER_SCOPE, EXIT_SCOPE, GET, SET, POP, FREE, DEREF, WRITE } from "./RustVirtualMachine";
import { cloneDeep } from "lodash-es";

// https://www.digitalocean.com/community/tutorials/typescript-module-augmentation
declare module "antlr4ng" {
    interface ParserRuleContext {
        type?: RustType;
    }
}

const UNIT_TYPE = "()"
interface Ref { kind: "ref"; target: RustType; }
interface MutRef { kind: "mutRef"; target: RustType; }
type PrimitiveType = "i32" | "u32" | "()";
type RustType =
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
        return a.kind === b.kind && typeEqual(a.target, b.target);
    }
}

function isPrimitive(type: RustType): type is PrimitiveType {
    return typeof type === "string";
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
        this.typeEnv = new TypeEnvironment();
    }

    private withNewEnvironment(ctx: ParserRuleContext, fn: () => RustType): RustType {
        // TODO: Error on duplicate variable names
        const usageMap = countVariableUsages(ctx);
        const scanResults = new LocalScannerVisitor(ctx, usageMap).visit(ctx);
        const previousEnv = this.typeEnv;
        this.typeEnv = this.typeEnv.extend(scanResults);
        
        try {
            return fn();
        } finally {
            this.typeEnv = previousEnv;
        }
    }

    visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): RustType {
        const leftType = this.visit(ctx.getChild(0));
        const rightType = this.visit(ctx.getChild(2));
        if (!typeEqual(leftType, rightType)) {
            throw new Error(`Type error: ${JSON.stringify(leftType)} and ${JSON.stringify(rightType)} are not compatible. Line ${ctx.start.line}`);
        }
        ctx.type = leftType;
        return ctx.type;
    }

    visitBlockExpression(ctx: BlockExpressionContext): RustType {
        return this.withNewEnvironment(ctx, () => {
            this.visitChildren(ctx); // Type check all children
            if (ctx.statements() === null) {
                ctx.type = UNIT_TYPE;
                return ctx.type;
            }
            if (ctx.statements().expression() !== null) {
                ctx.type = ctx.statements().expression().type;
                return ctx.type;
            }
            ctx.type = UNIT_TYPE;
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
        if (typeEqual(leftType, rightType)) {
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
        if (!isPrimitive(expressionType)) {
            ctx.type = expressionType.target;
            return ctx.type;
        }
        throw new Error(`type ${expressionType} cannot be dereferenced. Line ${ctx.start.line}`);
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
        this.compilerEnv = new CompilerEnvironment();
        this.typeEnv = new TypeEnvironment();
        this.bytecode = [];
    }

    private withNewEnvironment(ctx: ParserRuleContext, fn: () => void): void {
        // TODO: Error on duplicate variable names
        const usageMap = countVariableUsages(ctx);
        const scanResults  = new LocalScannerVisitor(ctx, usageMap).visit(ctx);
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

    visitBlockExpression(ctx: BlockExpressionContext): void {
        return this.withNewEnvironment(ctx, () => {
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
        if (ctx instanceof PathExpressionContext) {
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
            const value = parseInt(ctx.INTEGER_LITERAL().getText(), 10);
            this.bytecode.push(LDCI(value));
            return;
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }
}
