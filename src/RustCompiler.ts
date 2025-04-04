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

ParserRuleContext

type BuiltinType = "i32" | "u32";
type RustType = BuiltinType | string | undefined;
class RustTypeCheckerVisitor extends AbstractParseTreeVisitor<RustType> implements RustParserVisitor<RustType> {
    visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): RustType {
        const leftType = this.visit(ctx.getChild(0));
        const rightType = this.visit(ctx.getChild(2));
        console.log("leftType", leftType);
        console.log("rightType", rightType);
        if (leftType !== rightType) {
            throw new Error(`Type error: ${leftType} and ${rightType} are not compatible`);
        }
        ctx.type
        return leftType;
    }

    visitLiteralExpression(ctx: LiteralExpressionContext): RustType {
        if (ctx.INTEGER_LITERAL()) { // TODO: Could be u32
            ctx.type = "i32";
            return "i32";
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }
}

class LocalScannerVisitor extends AbstractParseTreeVisitor<string[]> implements RustParserVisitor<string[]> {
    selfContext: ParserRuleContext;

    constructor(selfContext: ParserRuleContext) {
        super();
        this.selfContext = selfContext;
    }

    defaultResult(): string[] {
        return [];
    }

    aggregateResult(aggregate: string[], nextResult: string[] | null): string[] {
        if (nextResult !== null) {
            return aggregate.concat(nextResult);
        }
        return aggregate;
    };

    visitBlockExpression(ctx: BlockExpressionContext): string[] {
        if (ctx !== this.selfContext) {
            return [];
        }
        return this.visitChildren(ctx);
    }

    visitIfExpression(ctx: IfExpressionContext): string[] {
        if (ctx !== this.selfContext) {
            return [];
        }
        return this.visitChildren(ctx);
    }

    visitLoopExpression(ctx: LoopExpressionContext): string[] {
        if (ctx !== this.selfContext) {
            return [];
        }
        return this.visitChildren(ctx);
    }

    visitMatchExpression(ctx: MatchExpressionContext): string[] {
        if (ctx !== this.selfContext) {
            return [];
        }
        return this.visitChildren(ctx);
    }

    visitLetStatement(ctx: LetStatementContext): string[] {
        return [ctx.identifierPattern().identifier().getText()];
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
        const locals = new LocalScannerVisitor(ctx).visit(ctx);
        const previousEnv = this.compilerEnv;
        this.compilerEnv = this.compilerEnv.extend(locals);
        
        try {
            return [ENTER_SCOPE(locals.length), ...fn(), EXIT_SCOPE()];
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
