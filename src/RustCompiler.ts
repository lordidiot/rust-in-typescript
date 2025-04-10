import { AbstractParseTreeVisitor, ParserRuleContext, ParseTree } from "antlr4ng";
import { ArithmeticOrLogicalExpressionContext, AssignmentExpressionContext, BlockExpressionContext, IfExpressionContext, LetStatementContext, LiteralExpressionContext, LoopExpressionContext, MatchExpressionContext, PathExpressionContext, StatementContext, StatementsContext } from "./parser/src/RustParser";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { Bytecode, ADD, SUB, MUL, DIV, MOD, LDCI, ENTER_SCOPE, EXIT_SCOPE, GET, SET, POP, FREE } from "./RustVirtualMachine";
import { cloneDeep } from "lodash-es";

// https://www.digitalocean.com/community/tutorials/typescript-module-augmentation
declare module "antlr4ng" {
    interface ParserRuleContext {
        type?: RustType;
    }
}

type BuiltinType = "i32" | "u32" | "()";
type Owned = {
    kind: "owned";
    readRefs: number;
    writeRefs: number;
    type: BuiltinType;
    lifetimeCount: number;
    isAlive: boolean;
}
type ReadRef = {
    kind: "readRef";
    owner: string;
    type: BuiltinType;
    lifetimeCount: number;
    isAlive: boolean;
}
type WriteRef = {
    kind: "writeRef";
    owner: string;
    type: BuiltinType;
    lifetimeCount: number;
    isAlive: boolean;
}
type PrimitiveType = {
    kind: "primitive";
    type: BuiltinType;

}
type RustType = Owned | ReadRef | WriteRef | PrimitiveType;
const UNIT_TYPE: PrimitiveType = { kind: "primitive", type: "()" }; 
const I32_TYPE: PrimitiveType = { kind: "primitive", type: "i32" };
const U32_TYPE: PrimitiveType = { kind: "primitive", type: "u32" };
const makeOwned = (type: BuiltinType, lifetimeCount: number = 0): Owned => ({ kind: "owned", readRefs: 0, writeRefs: 0, type, lifetimeCount, isAlive: true});
const makeReadRef = (ownerName: string, type: BuiltinType, lifetimeCount: number = 0): ReadRef => {
    return { kind: "readRef", owner: ownerName, type: type, lifetimeCount, isAlive: true};
};
const makeWriteRef = (ownerName: string, type: BuiltinType, lifetimeCount: number = 0): WriteRef => {
    return { kind: "writeRef", owner: ownerName, type: type, lifetimeCount, isAlive:true };
};


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

    visitLetStatement(ctx: LetStatementContext): ScanResults {
        // // TODO: Error on case where type annotation is not present
        const name = ctx.identifierPattern().identifier().getText();
        const typeCtx = ctx.type_();

        if (!typeCtx) {
            throw new Error(`Missing type annotation in let statement for variable ${name}`);
        }

        let type: RustType;
        let expr = ctx.expression().getText();

        if (typeCtx.unit_type()) {
            type = UNIT_TYPE;
        } else if (expr.includes("&")) {
            const isMutable = expr.includes("mut");
            const builtin = typeCtx.identifier()!.getText() as BuiltinType;
            const lifetime = this.usageMap?.get(name) ?? 0;
            const ownerName = isMutable
                                ? expr.replace('&mut','')
                                : expr.replace('&','');
            type = isMutable
                ? makeWriteRef(ownerName, builtin, lifetime)
                : makeReadRef(ownerName, builtin, lifetime);
        } else {
            const builtin = typeCtx.identifier()!.getText() as BuiltinType;
            const lifetime = this.usageMap?.get(name) ?? 0;
            type = makeOwned(builtin, lifetime);
        }

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
        if (leftType.type !== rightType.type) {
            throw new Error(`Type error: ${JSON.stringify(leftType)} and ${JSON.stringify(rightType)} are not compatible. Line ${ctx.start.line}`);
        }
        return makeOwned(leftType.type as BuiltinType);
    }

    visitBlockExpression(ctx: BlockExpressionContext): RustType {
        return this.withNewEnvironment(ctx, () => {
            this.visitChildren(ctx); // Type check all children
            if (ctx.statements() === null) {
                return UNIT_TYPE;
            }
            if (ctx.statements().expression() !== null) {
                return ctx.statements().expression().type;
            }
            return UNIT_TYPE;
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

    visitLiteralExpression(ctx: LiteralExpressionContext): RustType {
        if (ctx.INTEGER_LITERAL()) { // TODO: Could be u32
            ctx.type = I32_TYPE;
            return ctx.type;
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }

    visitAssignmentExpression(ctx: AssignmentExpressionContext) : RustType {
        const leftType = this.visit(ctx.getChild(0));
        const rightType = this.visit(ctx.getChild(2));
        if (leftType.type !== rightType.type) {
            throw new Error(`Type error: ${JSON.stringify(leftType)} and ${JSON.stringify(rightType)} are not compatible. Line ${ctx.start.line}`);
        }
        return leftType;
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



export class RustCompilerVisitor extends AbstractParseTreeVisitor<Bytecode[]> implements RustParserVisitor<Bytecode[]> {
    compilerEnv: CompilerEnvironment;
    typeEnv: TypeEnvironment;

    constructor() {
        super();
        this.compilerEnv = new CompilerEnvironment();
        this.typeEnv = new TypeEnvironment();
    }

    defaultResult(): Bytecode[] {
        return [];
    }

    aggregateResult(aggregate: Bytecode[], nextResult: Bytecode[] | null): Bytecode[] {
        if (nextResult !== null) {
            return aggregate.concat(nextResult);
        }
        return aggregate;
    };

    private withNewEnvironment(ctx: ParserRuleContext, fn: () => Bytecode[]): Bytecode[] {
        // TODO: Error on duplicate variable names
        const usageMap = countVariableUsages(ctx);
        const scanResults  = new LocalScannerVisitor(ctx, usageMap).visit(ctx);
        const previousEnv = this.compilerEnv;
        const prevTypes = this.typeEnv;

        this.compilerEnv = this.compilerEnv.extend(scanResults.names);
        this.typeEnv = this.typeEnv.extend(scanResults);

        
        try {
            return [ENTER_SCOPE(scanResults.names.length), ...fn(), EXIT_SCOPE()];
        } finally {
            this.compilerEnv = previousEnv;
            this.typeEnv = prevTypes;
        }
    }

    visitBlockExpression(ctx: BlockExpressionContext): Bytecode[] {
        return this.withNewEnvironment(ctx, () => {
            return this.visitChildren(ctx);
        });
    }

    visitStatements(ctx: StatementsContext): Bytecode[] {
        let bytecode = [];
        ctx.statement().forEach((statement: StatementContext) => {
            bytecode = bytecode.concat([...this.visit(statement), POP()]);
        });
        if (ctx.expression() !== null) {
            bytecode = bytecode.concat(this.visit(ctx.expression()));
        }
        return bytecode;
    }

    visitLetStatement(ctx: LetStatementContext): Bytecode[] {
        const name = ctx.identifierPattern().identifier().getText();
        const envPos = this.compilerEnv.lookupPosition(name);
        const type = this.typeEnv.lookupType(name);
        if (envPos === null) {
            throw new Error(`Variable ${name} not found in environment, this should not happen`);
        }
        if (ctx.expression() === null) {
            return []; // `let x;` style statement
        }

        // borrow checker
        BorrowChecker.borrowCheck(name, this.typeEnv);


        let bytecode = this.visit(ctx.expression());

        // transfer ownership of first variable
        if(type.kind === "owned") {
            let firstGetVarName: string | null = null;
            let pos : EnvironmentPosition;
            for (const instr of bytecode) {
                if (instr.type === "GET") {
                    pos = {frameIndex: instr.frameIndex, localIndex: instr.localIndex};
                    const varName = this.compilerEnv.lookupName(pos);
                    
                    if (varName) {
                        firstGetVarName = varName;
                        break;
                    }
                }
            }
            const oldType = this.typeEnv.lookupType(firstGetVarName);
            if (oldType !== null && oldType.kind === "owned") {
                oldType.isAlive = false;
            }
        }

        bytecode.push(SET(envPos.frameIndex, envPos.localIndex, 0)); // TODO: Indirection should depend on type

        if (!type || type.kind === "primitive") {
            throw new Error(`Cannot use variable ${name}`);
        }

        // case where declared variable is never used.
        if (type.lifetimeCount === 0) {
            if (BorrowChecker.freeCheck(name, this.typeEnv)) {
                bytecode.push(FREE(envPos.frameIndex, envPos.localIndex));
            }
            if (type.kind === "readRef" || type.kind === "writeRef") {
                if (BorrowChecker.freeCheck(type.owner, this.typeEnv)) {
                    const ownerPos = this.compilerEnv.lookupPosition(type.owner);
                    bytecode.push(FREE(ownerPos.frameIndex, ownerPos.localIndex));
                }
            }
        }

        return bytecode
    }

    visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): Bytecode[] {
        const bytecode = this.visit(ctx.getChild(0)).concat(this.visit(ctx.getChild(2)));
        if (ctx.PLUS()) return bytecode.concat([ADD()]);
        if (ctx.MINUS()) return bytecode.concat([SUB()]);
        if (ctx.STAR()) return bytecode.concat([MUL()]);
        if (ctx.SLASH()) return bytecode.concat([DIV()]);
        if (ctx.PERCENT()) return bytecode.concat([MOD()]);
        throw new Error("Not implemented (visitArithmeticOrLogicalExpression)");
    }

    // TODO: Too naive, doesn't handle a.b.c style statements
    visitPathExpression(ctx: PathExpressionContext): Bytecode[] {
        const name = ctx.getText();
        const pos = this.compilerEnv.lookupPosition(name);
        const type = this.typeEnv.lookupType(name);

        if (!pos || !type || type.kind === "primitive") {
            throw new Error(`Cannot use variable ${name}`);
        }

        if (!type.isAlive) {
            throw new Error(`Lifetime has ended for ${name}`);
        }
        
        const bytecode = [GET(pos.frameIndex, pos.localIndex, 0)]; // TODO: Indirection should depend on type

        // Lifetime Check
        type.lifetimeCount--;
        if (type.lifetimeCount === 0) {
            if(BorrowChecker.freeCheck(name, this.typeEnv)) {
                bytecode.push(FREE(pos.frameIndex, pos.localIndex));
            }
            
            if (type.kind === "readRef" || type.kind === "writeRef") {
                if (BorrowChecker.freeCheck(type.owner, this.typeEnv)) {
                    const ownerPos = this.compilerEnv.lookupPosition(type.owner);
                    bytecode.push(FREE(ownerPos.frameIndex, ownerPos.localIndex));
                }
            }
        }

        return bytecode;
    }

    visitLiteralExpression(ctx: LiteralExpressionContext): Bytecode[] {
        if (ctx.INTEGER_LITERAL()) {
            const value = parseInt(ctx.INTEGER_LITERAL().getText(), 10);
            return [ LDCI(value) ];
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }

    visitAssignmentExpression(ctx: AssignmentExpressionContext): Bytecode[] {
        const name = ctx.expression(0).getText();
        const envPos = this.compilerEnv.lookupPosition(name);
        const type = this.typeEnv.lookupType(name);
        if (envPos === null) {
            throw new Error(`Variable ${name} not found in environment, this should not happen`);
        }

        // borrow checker
        if (type.kind === "readRef") {
            throw new Error(`Cannot assign to non mutable reference ${name}`);
        } else if (type.kind === "writeRef") {
            throw new Error(`Cannot assign to mutable reference ${name}`);
        } else if (type.kind === "owned") {
            if (type.readRefs > 0 || type.writeRefs > 0) {
                throw new Error(`Cannot assign to ${name} because it is borrowed`);
            }
        }

        let bytecode = this.visit(ctx.expression(1));

        // transfer ownership of first variable
        if(type.kind === "owned") {
            let firstGetVarName: string | null = null;
            let pos : EnvironmentPosition;
            for (const instr of bytecode) {
                if (instr.type === "GET") {
                    pos = {frameIndex: instr.frameIndex, localIndex: instr.localIndex};
                    const varName = this.compilerEnv.lookupName(pos);
                    
                    if (varName) {
                        firstGetVarName = varName;
                        break;
                    }
                }
            }
            const oldType = this.typeEnv.lookupType(firstGetVarName);
            if (oldType !== null && oldType.kind === "owned") {
                oldType.isAlive = false;
            }
        }

        bytecode.push(SET(envPos.frameIndex, envPos.localIndex));

        if (!envPos || !type || type.kind === "primitive") {
            throw new Error(`Cannot use variable ${name}`);
        }

         // Lifetime Check
         type.lifetimeCount--;
         if (type.lifetimeCount === 0) {
             if(BorrowChecker.freeCheck(name, this.typeEnv)) {
                 bytecode.push(FREE(envPos.frameIndex, envPos.localIndex));
             }
         }
 

        return bytecode;

    }
    


}
