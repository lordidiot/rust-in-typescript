import { AbstractParseTreeVisitor, ParserRuleContext, ParseTree, TerminalNode } from "antlr4ng";
import { ArithmeticOrLogicalExpressionContext, AssignmentExpressionContext, BlockExpressionContext, BorrowExpressionContext, BreakExpressionContext, CallExpressionContext, ComparisonExpressionContext, CrateContext, DereferenceExpressionContext, ExpressionContext, Function_Context, IfExpressionContext, LetStatementContext, LiteralExpression_Context, LiteralExpressionContext, LoopExpressionContext, MatchExpressionContext, PathExpression_Context, PathExpressionContext, PredicateLoopExpressionContext, ReturnExpressionContext, StatementContext, StatementsContext, Type_Context, ExpressionWithBlockContext } from "./parser/src/RustParser";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { Bytecode, ADD, SUB, MUL, DIV, MOD, ENTER_SCOPE, EXIT_SCOPE, GET, SET, POP, FREE, DEREF, WRITE, LDCP, Value, JOFR, GOTOR, RET, CALL, DONE, EQ, ENTER_LOOP, EXIT_LOOP } from "./RustVirtualMachine";
import { cloneDeep } from "lodash-es";
import { Context, createContext } from "vm";
import { stringify } from "querystring";

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


type ScanResults = {
    names: string[];
    types: RustType[];
}
const EMPTY_SCAN_RESULTS: ScanResults = { names: [], types: [] };

class LocalScannerVisitor extends AbstractParseTreeVisitor<ScanResults> implements RustParserVisitor<ScanResults> {
    selfContext: ParserRuleContext;

    constructor(selfContext: ParserRuleContext) {
        super();
        this.selfContext = selfContext;
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
        // TODO: Error on case where type annotation is not present
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
            scanResults = new LocalScannerVisitor(ctx).visit(ctx);
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
        const scanResults = new LocalScannerVisitor(ctx,).visit(ctx);
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

    visitReturnExpression(ctx: ReturnExpressionContext): RustType {
        ctx.type = ctx.expression() !== null
            ? this.visit(ctx.expression())
            : UNIT_TYPE;
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

    visitComparisonExpression(ctx: ComparisonExpressionContext): RustType {
        const leftType = this.visit(ctx.getChild(0));
        const rightType = this.visit(ctx.getChild(2));
        if (!typeEqual(leftType, rightType)) {
            throw new Error(`mismatched types, expected ${JSON.stringify(leftType)}, found ${JSON.stringify(rightType)}. Line ${ctx.start.line}`);
        }
        const operator = ctx.comparisonOperator().getText();
        if (operator === "==") {
        } else {
            throw new Error(`Unhandled comparison operator ${operator}. Line ${ctx.start.line}`);
        }
        ctx.type = "bool";
        return ctx.type;
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): RustType {
        const predType = this.visit(ctx.expression())
        if (predType !== "bool") {
            throw new Error(`mismatched types, expected bool found ${JSON.stringify(predType)}. Line ${ctx.start.line}`);
        }
        ctx.type = this.visit(ctx.blockExpression());
        return ctx.type;
    }

    // TODO: Should we check if this is within a loop?
    visitBreakExpression(ctx: BreakExpressionContext): RustType {
        ctx.type = UNIT_TYPE;
        return ctx.type;
    }

    visitStatements(ctx: StatementsContext): RustType {
        if (ctx.statement() !== null) {
            for (const statement of ctx.statement()) {
                const statementType = this.visit(statement);
                const returnExpr = statement.expressionStatement()?.expression();
                if (returnExpr instanceof ReturnExpressionContext) {
                    // Early return, don't type remaining statements
                    ctx.type = statementType;
                    return ctx.type;
                }
            }
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

    visitAssignmentExpression(ctx: AssignmentExpressionContext): RustType {
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

type BorrowNode = 
    | { kind: "owned", type: RustType, id: number }
    | { kind: "ref", target: BorrowNode, id: number }
    | { kind: "mutRef", target: BorrowNode, id: number };

type BorrowNodeEntry = 
    | { type: BorrowNode[]; lifetime: number } 
    | "dangling";

type BorrowMap = Map<string, BorrowNodeEntry>;

class BorrowChecker {
    borrowMap: BorrowMap = new Map();
    private nodeCounter: number = 0;

    // Helper function to create a new unique node
    createNode(kind: "owned" | "ref" | "mutRef", target?: BorrowNode, type?: RustType): BorrowNode {
        if (kind === "owned") {
            if (!type) {
                throw new Error("Owned nodes must have a type");
            }
            const newNode = { kind: "owned", type: type, id: this.nodeCounter++} as BorrowNode;
            return newNode;
        }
        if (!target) {
            throw new Error("Reference nodes must have a target");
        }
        const newNode = { kind, target, id: this.nodeCounter++ } as BorrowNode;
        return newNode;
    }

    // Declare a new variable in the borrow graph
    declareVariable(name: string, initialNodes: BorrowNode[], lifetime: number): void {
        // if (this.borrowMap.has(name)) {
        //     throw new Error(`Variable ${name} already declared`);
        // }
        this.borrowMap.set(name, {
            type: initialNodes,
            lifetime: lifetime ? lifetime + 1 : 1
        });

        this.decrementAndCheck(name);
    }


    // Get the root node(s) for a variable
    getNodes(name: string): BorrowNode[] {
        const entry = this.borrowMap.get(name);
        if (!entry) {
            throw new Error(`cannot find ${name} in this scope`);
        }
        if (entry === "dangling") {
            throw new Error(`use of moved value: ${name}`);
        }
        return entry.type;
    }

    // Check if a node is mutable
    private isMutable(node: BorrowNode): boolean {
        return node.kind === "mutRef" || 
               (node.kind === "owned" && this.isOwnedNodeMutable(node));
    }

    // Check if an owned node is mutable (implementation depends on your type system)
    private isOwnedNodeMutable(node: BorrowNode): boolean {
        if (node.kind !== "owned") {
            throw new Error(`Node must be owned`);
        }
        return !isPrimitive(node.type);
    }

    // Create an immutable borrow
    immBorrow(nodes: BorrowNode[]): BorrowNode[] {
        // Check for conflicting mutable borrows
        if (this.hasActiveMutableBorrow(nodes)) {
            const varName = this.getVariableNameFromNodes(nodes);
            throw new Error(`cannot borrow ${varName} as immutable because it is also borrowed as mutable`);
        }

        // Create new reference node pointing to each input node
        return nodes.map(node => this.createNode("ref", node));
    }

    // Create a mutable borrow
    mutBorrow(nodes: BorrowNode[]): BorrowNode[] {
        // Check for any active borrows
        if (this.hasActiveBorrow(nodes)) {
            const varName = this.getVariableNameFromNodes(nodes);
            throw new Error(`cannot borrow ${varName} as mutable because it is also borrowed as immutable`);
        }

        // Create new mutable reference node pointing to each input node
        return nodes.map(node => this.createNode("mutRef", node));
    }

    // Move nodes from their owner
    move(nodes: BorrowNode[]): BorrowNode[] {
        if (this.hasActiveBorrow(nodes)) {
            const varName = this.getVariableNameFromNodes(nodes);
            throw new Error(`cannot move out of ${varName} because it is borrowed`);
        }

        // Find and mark the owner as dangling
        const ownerName = this.getVariableNameFromNodes(nodes);
        if (!ownerName) {
            return nodes;
        }

        const entry = this.borrowMap.get(ownerName);
        if(!entry) {
            throw new Error(`cannot find ${name} in this scope`);
        } else if (entry === "dangling") {
            throw new Error(`use of moved value: ${name}`);
        }

        // Mark the original as moved
        this.borrowMap.set(ownerName, "dangling");
        
        // Return the original nodes
        return entry.type;
    }


    // Check if any nodes in the input array are actively borrowed
    private hasActiveBorrow(nodes: BorrowNode[]): boolean {
        for (const [varName, entry] of this.borrowMap) {
            if (entry === "dangling") continue;
            
            for (const node of entry.type) {
                // Check if this node references any of our input nodes
                if (this.nodeReferencesAny(node, nodes)) {
                    return true;
                }
            }
        }
        return false;
    }

    // Check if any nodes in the input array are actively mutably borrowed
    private hasActiveMutableBorrow(nodes: BorrowNode[]): boolean {
        for (const [varName, entry] of this.borrowMap) {
            if (entry === "dangling") continue;
            
            for (const node of entry.type) {
                // Check if this is a mutable ref that references our nodes
                if (node.kind === "mutRef" && this.nodeReferencesAny(node, nodes)) {
                    return true;
                }
            }
        }
        return false;
    }

    checkIfAssignable(name: string): boolean {
        const entry = this.borrowMap.get(name);
        if(!entry) {
            throw new Error(`cannot find ${name} in this scope`);
        } else if (entry === "dangling") {
            return true;
        }

        if (this.hasActiveBorrow(entry.type)) {
            throw new Error(`cannot assign to ${name} because it is borrowed`);
        }
        
        return true;
    }

    // Helper to check if a node references any node in a list
    private nodeReferencesAny(node: BorrowNode, targets: BorrowNode[]): boolean {
        if (node.kind === "owned") return false;
        
        // Check direct references
        if (targets.includes(node.target)) {
            return true;
        }
        
        // Recursively check reference chains
        return this.nodeReferencesAny(node.target, targets);
    }

    // Helper to get variable name from nodes (if they belong to a variable)
    getVariableNameFromNodes(nodes: BorrowNode[]): string | null {
        for (const [name, entry] of this.borrowMap) {
            if (entry === "dangling") continue;
            
            // Check if all nodes belong to this variable
            if (nodes.every(node => entry.type.includes(node))) {
                return name;
            }
        }
        return null;
    }


    // Decrement lifetimes and clean up
    decrementAndCheck(name: string): void {
        const entry = this.borrowMap.get(name);
        if (!entry || entry === "dangling") return;

        entry.lifetime--;
        if (entry.lifetime <= 0) {
            this.maybeTransitionToDangling(name);
        }
    }

    decrementAndCheckInLoop(name: string): void {
        const entry = this.borrowMap.get(name);
        if (!entry || entry === "dangling") return;

        entry.lifetime--;
    }

    maybeTransitionToDangling(name: string): void {
        const entry = this.borrowMap.get(name);
        if (!entry) return;
    
        if (entry === "dangling") return;
    
        if (!this.hasActiveBorrow(entry.type)) {
            // Save the old nodes before marking as dangling
            const oldNodes = entry.type;
    
            // Mark as dangling
            this.borrowMap.set(name, "dangling");
    
            // Check parent lifetimes for any borrow nodes
            for (const oldNode of oldNodes) {
                if (oldNode.kind === "ref" || oldNode.kind === "mutRef") {
                    const parentName = this.getNameFromNode(oldNode.target);
                    if (parentName) {
                        this.checkParentLifetime(parentName);
                    }
                }
            }
        }
    }

    getNameFromNode(node: BorrowNode): string | null {
        // Find which variable owns this node
        for (const [name, entry] of this.borrowMap) {
            if(entry === "dangling") continue;
            if (entry.type.includes(node)) {
                return name;
            }
        }
        return null;
    }
    
    private checkParentLifetime(parentName: string): void {
        const parentEntry = this.borrowMap.get(parentName);
        if (!parentEntry || parentEntry === "dangling") return;
    
        // Check if parent has any remaining borrows
        const hasOtherBorrows = this.hasActiveBorrow(parentEntry.type);
    
        // If no other borrows exist and parent's lifetime is expired
        if (!hasOtherBorrows && parentEntry.lifetime <= 0) {
            this.borrowMap.set(parentName, "dangling");
        }
    }

    exitScope(names: string[]): void {
        // First collect all variables being dropped
        const dropping = new Set(names);
        
        for (const name of names) {
            const entry = this.borrowMap.get(name);
            if (entry === "dangling") continue;
            
            // Check for active borrows from variables NOT being dropped
            const hasExternalBorrow = this.hasActiveBorrowFromNonDropped(
                entry.type, 
                dropping
            );
            
            if (hasExternalBorrow) {
                throw new Error(`${name} does not live long enough`);
            }
        }
        
        // Only delete after all checks pass
        for (const name of names) {
            this.borrowMap.delete(name);
        }
    }
    
    private hasActiveBorrowFromNonDropped(nodes: BorrowNode[], dropping: Set<string>): boolean {
        for (const [varName, entry] of this.borrowMap) {
            // Skip variables that are being dropped
            if (dropping.has(varName) || entry === "dangling") continue;
            
            for (const node of entry.type) {
                if (this.nodeReferencesAnyIn(node, nodes)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    private nodeReferencesAnyIn(node: BorrowNode, targets: BorrowNode[]): boolean {
        if (node.kind === "owned") return false;
        
        // Check if this node references any target
        if (targets.includes(node.target)) {
            return true;
        }
        
        // Recursively check reference chains
        return this.nodeReferencesAnyIn(node.target, targets);
    }

    use(name: string): void {
        const entry = this.borrowMap.get(name);
        if(!entry) {
            throw new Error(`cannot find ${name} in this scope`);
        } else if (entry === "dangling") {
            throw new Error(`use of moved value: ${name}`);
        } else if (entry.type.length === 0) {
            throw new Error(`used binding ${name} isn't initialized`)
        } else if (this.hasActiveMutableBorrow(entry.type)) {
            throw new Error(`cannot use ${name} because it was mutably borrowed.`)
        }
    }

    
}


type UsageMap = Map<string, number>;

export function countVariableUsages(ctx: ParseTree): UsageMap {
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


export class BorrowCheckingVisitor extends AbstractParseTreeVisitor<void> implements RustParserVisitor<void> {
    private borrowChecker: BorrowChecker | null;
    private usageMap: UsageMap;
    private currentFunc: string;
    private funcParms: Map<string, BorrowNode[]> = new Map();
    private inLoop: boolean = false;

    constructor() {
        super();
    }


    private decrementPathExpressionsInStatement(ctx: ParseTree): void {
        // We'll use a post-order traversal to visit all path expressions
        const visitNode = (node: ParseTree): void => {
            for (let i = 0; i < node.getChildCount(); i++) {
                visitNode(node.getChild(i));
            }
            if (node instanceof PathExpressionContext) {
                const varName = node.getText();
                this.borrowChecker.decrementAndCheck(varName);
            }
        };
        
        visitNode(ctx);
    }

    private decrementPathExpressionsInLoop(ctx: ParseTree): void {
        // We'll use a post-order traversal to visit all path expressions
        const visitNode = (node: ParseTree): void => {
            for (let i = 0; i < node.getChildCount(); i++) {
                visitNode(node.getChild(i));
            }
            if (node instanceof PathExpressionContext) {
                const varName = node.getText();
                this.borrowChecker.decrementAndCheckInLoop(varName);
            }
        };
        
        visitNode(ctx);
    }

    visitCrate(ctx: CrateContext): void {
        ctx.function_().forEach((fn: Function_Context) => {
            this.visit(fn);
        });
    }

    visitFunction_(ctx: Function_Context): void {
        this.currentFunc = ctx.identifier().getText();

        this.borrowChecker = new BorrowChecker();
        this.usageMap = countVariableUsages(ctx.blockExpression());

        let paramNames: string[] = [];
        let paramTypes: RustType[] = []

        if(ctx.functionParameters()) {
            const scanResults = new LocalScannerVisitor(ctx).visit(ctx);

            if (scanResults.names.length !== 1) {
                throw new Error(`Should not happen`);
            }

            const fnType = scanResults.types[0];

            if (isPrimitive(fnType) || fnType.kind !== "fn") {
                throw new Error(`Should not happen`);
            }

            paramNames = fnType.paramNames; 
            paramTypes = fnType.paramTypes;
        }
        
        let refParams: BorrowNode[] = [];
        
        
        paramNames.forEach((param, i) => {
            const type = paramTypes[i];
            if (isRef(type)) {
                const refnode = this.convertRustTypeToBorrowNodes(type);
                refParams.push(refnode);
                this.borrowChecker.declareVariable(
                    param, 
                    [refnode], 
                    this.usageMap.get(param) || 1
                );

            } else {
                const ownedNode = this.borrowChecker.createNode("owned", undefined, type);
                this.borrowChecker.declareVariable(
                    param, 
                    [ownedNode], 
                    this.usageMap.get(param) || 1
                );
                
            }
            
        });

        this.funcParms.set(this.currentFunc, refParams);

        // Process function body
        this.visit(ctx.blockExpression());

        // Clean up
        this.borrowChecker = null;
        this.usageMap = null;
    }
    
    // Helper function to recursively convert RustType to BorrowNodes
    private convertRustTypeToBorrowNodes(type: RustType): BorrowNode {
        if (typeof type === "string") {
            // Primitive types become owned nodes
            return this.borrowChecker.createNode("owned", undefined, type);
        }
    
        switch (type.kind) {
            case "ref":
                // Create ref nodes pointing to the target's nodes
                const refTargetNodes = this.convertRustTypeToBorrowNodes(type.target);
                return this.borrowChecker.createNode("ref", refTargetNodes);
                
            case "mutRef":
                // Create mutRef nodes pointing to the target's nodes
                const mutRefTargetNodes = this.convertRustTypeToBorrowNodes(type.target);
                return this.borrowChecker.createNode("mutRef", mutRefTargetNodes);
            default:
                throw new Error(`Unhandled RustType kind: ${(type as any).kind}`);
        }
    }
    
  

    visitCallExpression(ctx: CallExpressionContext): void {
        // Process arguments
        if (ctx.callParams()) {
            ctx.callParams().expression().forEach(arg => {
                const nodes = this.resolveExpressionType(arg);
                if(nodes[0].kind === "owned" && isMoveSemantics(nodes[0].type) || nodes[0].kind === "mutRef") {
                    this.borrowChecker.move(nodes);
                }
            });
        }
    }

    visitReturnExpression(ctx: ReturnExpressionContext): void {
        if (!ctx.expression()) return;
    
        const retNodes = this.resolveExpressionType(ctx.expression());
        const returnNode = retNodes[0]; // Get the primary return node
    
        // Only check reference returns
        if (returnNode.kind === "ref" || returnNode.kind === "mutRef") {
            const paramNodes = this.funcParms.get(this.currentFunc) || [];
            let isParamReference = false;
            let referencedParamName: string | null = null;
    
            // Check if this references any parameter
            for (const paramNode of paramNodes) {
                if (returnNode.id === paramNode.id) {
                    return;
                }
                if (returnNode.target.id === paramNode.id) {
                    isParamReference = true;
                    referencedParamName = this.borrowChecker.getNameFromNode(paramNode);
                    break;
                }
            }
    
            if (!isParamReference) {
                // Check if it references a local variable
                const localVarName = this.borrowChecker.getNameFromNode(returnNode.target);
                if (localVarName) {
                    throw new Error(`cannot return value referencing local variable \`${localVarName}\``);
                }
                throw new Error("cannot return reference to temporary value");
            } else if (referencedParamName) {
                // This is the specific error you asked for
                throw new Error(`cannot return reference to function parameter \`${referencedParamName}\``);
            }
        }
    }


    private getType(ctx: Context): RustType {
        let type = ctx.type;
        if (type === undefined) {
            type = this.getType(ctx.getChild(0));
        }
        return type;
    }

    visitBlockExpression(ctx: BlockExpressionContext): void {
        const scanResults = new LocalScannerVisitor(ctx).visit(ctx);
        const varsToDrop: string[] = [];
        scanResults.names.forEach(name => varsToDrop.push(name));

        this.visitChildren(ctx);
        this.borrowChecker.exitScope(varsToDrop);
    }

    visitStatements(ctx: StatementsContext): void {
        ctx.statement().forEach((statement: StatementContext) => {
            this.visit(statement);
            if (!(statement.getChild(0).getChild(0) instanceof ExpressionWithBlockContext)) {
                if (this.inLoop) {
                    this.decrementPathExpressionsInLoop(statement);
                } else {
                    this.decrementPathExpressionsInStatement(statement);
                }
            }
        });
        if (ctx.expression() !== null) {
            this.visit(ctx.expression());
            if (this.inLoop) {
                this.decrementPathExpressionsInLoop(ctx.expression());
            } else {
                this.decrementPathExpressionsInStatement(ctx.expression());
            }
        }
    }

    visitLetStatement(ctx: LetStatementContext): void {
        const name = ctx.identifierPattern().identifier().getText();
        
        if (!ctx.expression()){
            this.borrowChecker.declareVariable(name, [], this.usageMap.get(name));
            return;
        }
        
        const expr = ctx.expression();
        
        // Visit the expression first to handle any sub-expressions
        this.visit(expr);
        
        // Handle the expression recursively
        let borrowType = this.resolveExpressionType(expr);

        if(borrowType[0].kind === "owned" && isMoveSemantics(borrowType[0].type) || borrowType[0].kind === "mutRef") {
            borrowType = this.borrowChecker.move(borrowType);
        }
        
        if (borrowType) {
            this.borrowChecker.declareVariable(name, borrowType, this.usageMap.get(name));
        }
    }
    
    private resolveExpressionType(expr: ParseTree): BorrowNode[] | undefined {
        if (expr instanceof BorrowExpressionContext) {
            return this.handleBorrowExpression(expr);
        }
        else if (expr instanceof PathExpressionContext) {
            return this.handlePathExpression(expr);
        }
        else if (expr instanceof PathExpression_Context) {
            return this.handlePathExpression_(expr);
        }
        else if (expr instanceof DereferenceExpressionContext) {
            return this.handleDereferenceExpression(expr);
        }
        else if (expr instanceof CallExpressionContext) {
            return this.handleCallExpression(expr);
        } else if (expr instanceof LiteralExpressionContext || ArithmeticOrLogicalExpressionContext) {
            const type = this.getType(expr);
            if (isPrimitive(type)) {
                const borrowNode = this.borrowChecker.createNode("owned", undefined, type);
                return [borrowNode];
            }
        }
        
        if(expr.getChild(0)) {
            return this.resolveExpressionType(expr.getChild(0));
        }

        return undefined;
    }
    
    private handleBorrowExpression(expr: BorrowExpressionContext): BorrowNode[] {
        const innerExpr = expr.expression();
        const borrowNode = this.resolveExpressionType(innerExpr);

        if (expr.KW_MUT()) {
            return this.borrowChecker.mutBorrow(borrowNode);
        } else {
            return this.borrowChecker.immBorrow(borrowNode);
        }
    }
    
    private handlePathExpression(expr: PathExpressionContext): BorrowNode[] {
        const name = expr.getText();
        return this.borrowChecker.getNodes(name);
    }

    private handlePathExpression_(expr: PathExpression_Context): BorrowNode[] {
        const name = expr.getText();
        return this.borrowChecker.getNodes(name);
    }
    
    private handleDereferenceExpression(expr: DereferenceExpressionContext): BorrowNode[]  {  
        const borrowNode = this.resolveExpressionType(expr.expression());
        let returnNodes: BorrowNode[];

        borrowNode.forEach(node => {
            if (!node) {
                throw new Error(`cannot find variable in scope`);
            } else if (node.kind == "owned") {
                throw new Error(`cannot dereference owned value`);
            } else if(!node.target) {
                throw new Error(`cannot dereference moved value`);
            } else {
                returnNodes.push(node.target);
            }
        });

        return returnNodes;
    }
    
    private handleCallExpression(expr: CallExpressionContext): BorrowNode[] {
        const retType = expr.type;

        if (isRef(retType)) {
            let returnNodes: BorrowNode[] = [];
            if (expr.callParams() !== null) {
                expr.callParams().expression().forEach((expr: ExpressionContext) => {
                    const nodes = this.resolveExpressionType(expr);
                    nodes.forEach(node => {
                        if (node.kind === "ref" || node.kind === "mutRef") {
                            returnNodes.push(node);
                        }
                    });
                    if(nodes[0].kind === "owned" && isMoveSemantics(nodes[0].type) || nodes[0].kind === "mutRef") {
                        this.borrowChecker.move(nodes);
                    }
                });                
            }
            return returnNodes;
        } 
        return [this.borrowChecker.createNode("owned", undefined, retType)];
        
    }


    visitAssignmentExpression(ctx: AssignmentExpressionContext): void {
        const lhs = ctx.expression(0);

        if (!this.isValidAssignmentTarget(lhs)) {
            throw new Error(`invalid left-hand side of assignment`);
        }

        const name = lhs.getText();
        if (!this.borrowChecker.checkIfAssignable(name)) {
            throw new Error(`cannot assign to ${name}`);
        }

        
        if (!ctx.expression(1)) return;
        
        const expr = ctx.expression(1);

        this.visit(expr)
        
        // Handle the expression recursively
        let borrowType = this.resolveExpressionType(expr);

        if(borrowType[0].kind === "owned" && isMoveSemantics(borrowType[0].type) || borrowType[0].kind === "mutRef") {
            borrowType = this.borrowChecker.move(borrowType);
        }
        
        if (borrowType) {
            const targetNode = this.borrowChecker.borrowMap.get(name);
            if (targetNode === "dangling") throw new Error(`cannot assign to moved value: ${name}`);
            targetNode.type = borrowType;
        }
    }

    private isValidAssignmentTarget(expr: ParseTree): boolean {
        // Base case: Path expressions are valid
        if (expr instanceof PathExpressionContext || 
            expr instanceof PathExpression_Context) {
            return true;
        }
    
        // Explicitly invalid cases
        if (expr instanceof BorrowExpressionContext ||
            expr instanceof CallExpressionContext ||
            expr instanceof LiteralExpressionContext ||
            expr instanceof ArithmeticOrLogicalExpressionContext) {
            return false;
        }
    
        // Default case for other expression types
        return this.isValidAssignmentTarget(expr.getChild(0));
    }

    visitPathExpression(ctx: PathExpressionContext): void {
       const name = ctx.getText();
       this.borrowChecker.use(name);
    }

    visitPathExpression_(ctx: PathExpression_Context): void {
        const name = ctx.getText();
        this.borrowChecker.use(name);
     }

    visitBorrowExpression(ctx: BorrowExpressionContext): void {
        this.handleBorrowExpression(ctx);
    }


    visitIfExpression(ctx: IfExpressionContext): void {
        this.visit(ctx.expression());
        if (this.inLoop) {
            this.decrementPathExpressionsInLoop(ctx.expression());
        } else {
            this.decrementPathExpressionsInStatement(ctx.expression());
        }
        
    
        // Shallow clone is sufficient since we won't modify nodes
        const originalBorrowMap = new Map(this.borrowChecker.borrowMap);
        
        const elseUsage = ctx.KW_ELSE() 
            ? countVariableUsages(ctx.blockExpression()[1] || ctx.ifExpression()!)
            : new Map<string, number>();
        
        // Process if branch while accounting for else usages
        this.adjustForOppositeBranch(elseUsage);
        this.visit(ctx.blockExpression(0));
        const ifBorrowMap = new Map(this.borrowChecker.borrowMap);
        
        // Process else branch if exists
        let elseBorrowMap = new Map(originalBorrowMap);
        if (ctx.KW_ELSE()) {
            const elseClause = ctx.blockExpression()[1] || ctx.ifExpression()!;
            const ifUsage = countVariableUsages(ctx.blockExpression(0));
            
            // Restore to original state before processing else
            this.borrowChecker.borrowMap = new Map(originalBorrowMap);
            this.adjustForOppositeBranch(ifUsage);
            
            this.visit(elseClause);
            elseBorrowMap = new Map(this.borrowChecker.borrowMap);
        }
        
        // Merge the borrow maps from both branches
        this.borrowChecker.borrowMap = this.mergeBranchMaps(ifBorrowMap, elseBorrowMap);
    }
    
    private adjustForOppositeBranch(oppositeUsage: UsageMap): void {
        for (const [varName, count] of oppositeUsage) {
            const entry = this.borrowChecker.borrowMap.get(varName);
            if (entry && entry !== "dangling") {
                // Create new entry with updated lifetime
                const newEntry = {
                    type: entry.type,  // Reference to same nodes
                    lifetime: Math.max(0, entry.lifetime - count)
                };
                this.borrowChecker.borrowMap.set(varName, newEntry);
                
                if (newEntry.lifetime <= 0) {
                    this.borrowChecker.maybeTransitionToDangling(varName);
                }
            }
        }
    }
    
    private mergeBranchMaps(ifMap: BorrowMap, elseMap: BorrowMap): BorrowMap {
        const merged = new Map<string, BorrowNodeEntry>();
        const allVars = new Set([...ifMap.keys(), ...elseMap.keys()]);
    
        for (const varName of allVars) {
            const ifEntry = ifMap.get(varName);
            const elseEntry = elseMap.get(varName);
    
            // Case 1: Variable only in one branch
            if (!ifEntry || !elseEntry) {
                merged.set(varName, ifEntry || elseEntry!);
                continue;
            }
    
            // Case 2: Variable in both branches but one is dangling
            if (ifEntry === "dangling" && elseEntry === "dangling") {
                merged.set(varName, "dangling");
                continue;
            } else if (ifEntry === "dangling") {
                merged.set(varName, elseEntry);
                continue;
            } else if (elseEntry === "dangling") {
                merged.set(varName, ifEntry);
                continue;
            }
    
            // Case 3: Merge nodes and lifetimes
            const mergedNodes = [...new Set([...ifEntry.type, ...elseEntry.type])];
            const mergedLifetime = Math.min(ifEntry.lifetime, elseEntry.lifetime);
    
            merged.set(varName, {
                type: mergedNodes,  // References to original nodes
                lifetime: mergedLifetime
            });
    
            if (mergedLifetime <= 0) {
                // Create new dangling entry without modifying original maps
                merged.set(varName, "dangling");
            }
        }
    
        return merged;
    }


    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): void {
        this.visit(ctx.expression());
        this.decrementPathExpressionsInLoop(ctx.expression());
        
        this.inLoop = true;
        this.visit(ctx.blockExpression());
        this.inLoop = false;
        
        for (const [varName, entry] of this.borrowChecker.borrowMap.entries()) {
            if (entry === "dangling") continue;
            if (entry.lifetime <= 0) {
                this.borrowChecker.maybeTransitionToDangling(varName);
            }
        }
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

export class RustCompilerVisitor extends AbstractParseTreeVisitor<void> implements RustParserVisitor<void> {
    compilerEnv: CompilerEnvironment;
    typeEnv: TypeEnvironment;
    bytecode: Bytecode[];
    currentLoopEnd: number[];

    constructor() {
        super();
        this.bytecode = [];
        this.currentLoopEnd = [];
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
            scanResults  = new LocalScannerVisitor(ctx).visit(ctx);
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
        }
    }

    visitCrate(ctx: CrateContext): void {
        const usageMap = new Map();
        const scanResults = new LocalScannerVisitor(ctx).visit(ctx);
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
            const reversedParams = [...fnType.paramNames].reverse();
            reversedParams.forEach((name: string) => {
                const envPos = this.compilerEnv.lookupPosition(name);
                this.bytecode.push(SET(envPos.frameIndex, envPos.localIndex, 0));
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
    }

    visitReturnExpression(ctx: ReturnExpressionContext): void {
        if (ctx.expression() !== null) {
            this.visit(ctx.expression());
        }
        this.bytecode.push(RET());
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
            if (statement.type !== UNIT_TYPE) {
                this.bytecode.push(POP()); // TODO: Whether to free or not
            } else {
                console.log("hello", statement.getText());
            }
        });
        if (ctx.expression() !== null) {
            this.visit(ctx.expression());
        }
    }

    visitLetStatement(ctx: LetStatementContext): void {
        const name = ctx.identifierPattern().identifier().getText();
        const envPos = this.compilerEnv.lookupPosition(name);
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

    visitComparisonExpression(ctx: ComparisonExpressionContext): void {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.bytecode.push(EQ());
    }

    visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext): void {
        this.bytecode.push(ENTER_LOOP()); // Save environment
        const predSize = this.visitAndGetBytecodeSize(ctx.expression());
        const jofr_addr = this.bytecode.length;
        const jofr = JOFR(0);
        this.bytecode.push(jofr); // Skip body on predicate false
        if (jofr.type !== "JOFR") throw new Error("This never happens"); // For type assertion
        this.currentLoopEnd.push(jofr_addr)
        const loopBodySize = this.visitAndGetBytecodeSize(ctx.blockExpression());
        jofr.skip = loopBodySize + 1; // Skip the GOTOR
        // pc = pred_addr + predSize + 1 + loopBodySize
        // pc + 1 + skip = pred_addr
        // pred_addr + predSize + loopBodySize + 2 + skip = pred_addr
        // skip = -(predSize + loopBodySize + 2)
        this.bytecode.push(GOTOR(-(predSize + loopBodySize + 2))); // Loop back to predicate
        this.bytecode.push(EXIT_LOOP()); // Restore environment
    }

    visitBreakExpression(ctx: BreakExpressionContext): void {
        if (this.currentLoopEnd.length === 0) {
            throw new Error(`break outside of a loop. Line ${ctx.start.line}`);
        }
        const loopEnd = this.currentLoopEnd[this.currentLoopEnd.length - 1];
        // Hack: Push false, then jump to current loop's JOFR
        // pc + 1 + skip = loopEnd
        // skip = loopEnd - pc - 1
        this.bytecode.push(LDCP(Value.fromBool(false)));
        const pc = this.bytecode.length;
        this.bytecode.push(GOTOR(loopEnd - pc - 1));
    }

    // TODO: Too naive, doesn't handle a.b.c style statements
    visitPathExpression(ctx: PathExpressionContext): void {
        const name = ctx.getText();
        const pos = this.compilerEnv.lookupPosition(name);
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
