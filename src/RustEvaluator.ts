import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLexer } from "./parser/src/RustLexer";
import { RustParser } from "./parser/src/RustParser";
import { CharStream, CommonTokenStream, ParseTree } from "antlr4ng";
import { Bytecode, DONE, RustVirtualMachine } from "./RustVirtualMachine";
import { RustCompilerVisitor } from "./RustCompiler";

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
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}