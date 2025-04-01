import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLexer } from "./parser/src/RustLexer";
import { ArithmeticOrLogicalExpressionContext, LiteralExpressionContext, RustParser } from "./parser/src/RustParser";
import { AbstractParseTreeVisitor, CharStream, CommonTokenStream, ParseTree } from "antlr4ng";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";

class RustCompilerVisitor extends AbstractParseTreeVisitor<Bytecode[]> implements RustParserVisitor<Bytecode[]> {
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

type Bytecode = 
    | { type: "LDCI", operand: number }
    | { type: "ADD" }
    | { type: "SUB" }
    | { type: "MUL" }
    | { type: "DIV" }
    | { type: "MOD" }
    | { type: "DONE" }

const LDCI = (operand: number): Bytecode => ({ type: "LDCI", operand });
const ADD = (): Bytecode => ({ type: "ADD" });
const SUB = (): Bytecode => ({ type: "SUB" });
const MUL = (): Bytecode => ({ type: "MUL" });
const DIV = (): Bytecode => ({ type: "DIV" });
const MOD = (): Bytecode => ({ type: "MOD" });
const DONE = (): Bytecode => ({ type: "DONE" });

class RustVirtualMachine {
    private operandStack: number[] = [];
    private bytecode: Bytecode[];
    private pc: number = 0;

    constructor(bytecode: Bytecode[]) {
        this.bytecode = bytecode;
    }

    private bytecodeHandler: { [key: string]: (bytecode: Bytecode) => void } = {
        "LDCI": (bytecode) => {
            this.operandStack.push((bytecode as { type: "LDCI", operand: number }).operand);
        },
        "ADD": () => {
            const b = this.operandStack.pop()!;
            const a = this.operandStack.pop()!;
            this.operandStack.push(a + b);
        },
        "SUB": () => {
            const d = this.operandStack.pop()!;
            const c = this.operandStack.pop()!;
            this.operandStack.push(c - d);
        },
        "MUL": () => {
            const f = this.operandStack.pop()!;
            const e = this.operandStack.pop()!;
            this.operandStack.push(e * f);
        },
        "DIV": () => {
            const h = this.operandStack.pop()!;
            const g = this.operandStack.pop()!;
            if (h === 0) throw new Error("Division by zero");
            this.operandStack.push(g / h);
        },
        "MOD": () => {
            const j = this.operandStack.pop()!;
            const i = this.operandStack.pop()!;
            if (j === 0) throw new Error("Division by zero");
            this.operandStack.push(i % j);
        }
    };

    run(): number {
        while (this.bytecode[this.pc].type !== "DONE") {
            const instruction = this.bytecode[this.pc++];
            this.bytecodeHandler[instruction.type](instruction);
        }
        return this.operandStack.pop()!;
    }
}

export class RustEvaluator extends BasicEvaluator {
    private compilerVisitor: RustCompilerVisitor;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.compilerVisitor = new RustCompilerVisitor();
    }

    compile(tree: ParseTree): Bytecode[] {
        const bytecode = this.compilerVisitor.visit(tree);
        bytecode.push(DONE());
        return bytecode;
    }

    async evaluateChunk(chunk: string): Promise<void> {
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RustParser(tokenStream);
            
            // Compile the expression
            const tree = parser.expression();
            const bytecode = this.compile(tree);

            // Run the bytecode
            const vm = new RustVirtualMachine(bytecode);
            console.log('bytecode', bytecode);
            const result = vm.run();

            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            // Print stack trace for debugging
            console.error(error);
            /*
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
            */
        }
    }
}