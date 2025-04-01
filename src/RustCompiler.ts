import { AbstractParseTreeVisitor } from "antlr4ng";
import { ArithmeticOrLogicalExpressionContext, LiteralExpressionContext } from "./parser/src/RustParser";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { Bytecode, ADD, SUB, MUL, DIV, MOD, LDCI } from "./RustVirtualMachine";

export class RustCompilerVisitor extends AbstractParseTreeVisitor<Bytecode[]> implements RustParserVisitor<Bytecode[]> {
    visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext): Bytecode[] {
        const bytecode = this.visit(ctx.getChild(0)).concat(this.visit(ctx.getChild(2)));
        if (ctx.PLUS()) return bytecode.concat([ADD()]);
        if (ctx.MINUS()) return bytecode.concat([SUB()]);
        if (ctx.STAR()) return bytecode.concat([MUL()]);
        if (ctx.SLASH()) return bytecode.concat([DIV()]);
        if (ctx.PERCENT()) return bytecode.concat([MOD()]);
        throw new Error("Not implemented (visitArithmeticOrLogicalExpression)");
    }

    visitLiteralExpression(ctx: LiteralExpressionContext): Bytecode[] {
        if (ctx.INTEGER_LITERAL()) {
            const value = parseInt(ctx.INTEGER_LITERAL().getText(), 10);
            return [ LDCI(value) ];
        }
        throw new Error("Not implemented (visitLiteralExpression)");
    }
}
