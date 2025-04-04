import { AbstractParseTreeVisitor, ParserRuleContext, ParseTree } from "antlr4ng";
import { ArithmeticOrLogicalExpressionContext, BlockExpressionContext, IfExpressionContext, LetStatementContext, LiteralExpressionContext, LoopExpressionContext, MatchExpressionContext, PathExpressionContext, StatementContext, StatementsContext } from "./parser/src/RustParser";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { Bytecode, ADD, SUB, MUL, DIV, MOD, LDCI, ENTER_SCOPE, EXIT_SCOPE, GET, SET } from "./RustVirtualMachine";

// https://www.digitalocean.com/community/tutorials/typescript-module-augmentation
declare module "antlr4ng" {
    interface ParserRuleContext {
        type?: RustType;
    }
}

type BuiltinType = "i32" | "u32" | "()";
type RustType = BuiltinType;

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
        const name = ctx.identifierPattern().identifier().getText();
        // TODO: Error on case where type annotation is not present
        const type = ctx.type_()!.unit_type() ? "()" : ctx.type_()!.identifier()?.getText();
        return {
            names: [name],
            types: [type]
        };
    }
}

class TypeEnvironment {
    types: Map<string, RustType>;
    parent: TypeEnvironment | null;

    constructor(parent: TypeEnvironment | null, locals: ScanResults) {
        this.types = new Map();
        this.parent = parent;
        for (let i = 0; i < locals.names.length; i++) {
            this.types.set(locals.names[i], locals.types[i]);
        }
    }

    extend(locals: ScanResults): TypeEnvironment {
        return new TypeEnvironment(this, locals);
    }

    lookupType(name: string): RustType | null {
        const type = this.types.get(name);
        if (type !== undefined) {
            return type;
        }
        // Recursively check the parent environment
        let envType = this.parent?.lookupType(name);
        return envType;
    }
}

export class RustTypeCheckerVisitor extends AbstractParseTreeVisitor<RustType> implements RustParserVisitor<RustType> {
    typeEnv: TypeEnvironment;

    constructor() {
        super();
        this.typeEnv = new TypeEnvironment(null, EMPTY_SCAN_RESULTS);
    }

    private withNewEnvironment(ctx: ParserRuleContext, fn: () => RustType): RustType {
        // TODO: Error on duplicate variable names
        const scanResults = new LocalScannerVisitor(ctx).visit(ctx);
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
        if (leftType !== rightType) {
            throw new Error(`Type error: ${leftType} and ${rightType} are not compatible`);
        }
        ctx.type = leftType;
        return ctx.type;
    }

    visitBlockExpression(ctx: BlockExpressionContext): RustType {
        return this.withNewEnvironment(ctx, () => {
            this.visitChildren(ctx); // Type check all children
            if (ctx.statements() === null) {
                return "()";
            }
            if (ctx.statements().expression() !== null) {
                return ctx.statements().expression().type;
            }
            return "()";
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
            ctx.type = "i32";
            return ctx.type;
        }
        throw new Error("Not implemented (visitLiteralExpression)");
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
}

export class RustCompilerVisitor extends AbstractParseTreeVisitor<Bytecode[]> implements RustParserVisitor<Bytecode[]> {
    compilerEnv: CompilerEnvironment;

    constructor() {
        super();
        this.compilerEnv = new CompilerEnvironment();
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
        const { names } = new LocalScannerVisitor(ctx).visit(ctx);
        const previousEnv = this.compilerEnv;
        this.compilerEnv = this.compilerEnv.extend(names);
        
        try {
            return [ENTER_SCOPE(names.length), ...fn(), EXIT_SCOPE()];
        } finally {
            this.compilerEnv = previousEnv;
        }
    }

    visitBlockExpression(ctx: BlockExpressionContext): Bytecode[] {
        return this.withNewEnvironment(ctx, () => {
            return this.visitChildren(ctx);
        });
    }

    visitLetStatement(ctx: LetStatementContext): Bytecode[] {
        const name = ctx.identifierPattern().identifier().getText();
        const envPos = this.compilerEnv.lookupPosition(name);
        if (envPos === null) {
            throw new Error(`Variable ${name} not found in environment, this should not happen`);
        }
        if (ctx.expression() === null) {
            return []; // `let x;` style statement
        }
        const bytecode = this.visit(ctx.expression());
        return bytecode.concat([SET(envPos.frameIndex, envPos.localIndex)]);
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
        const envPos = this.compilerEnv.lookupPosition(ctx.getText());
        if (envPos === null) {
            throw new Error(`Variable ${ctx.getText()} not found in environment, this should not happen`);
        }
        return [GET(envPos.frameIndex, envPos.localIndex)];
    }

    visitLiteralExpression(ctx: LiteralExpressionContext): Bytecode[] {
        if (ctx.INTEGER_LITERAL()) {
            const value = parseInt(ctx.INTEGER_LITERAL().getText(), 10);
            return [ LDCI(value) ];
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }
}
