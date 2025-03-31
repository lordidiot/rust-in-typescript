import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLexer } from "./parser/src/RustLexer";
import { RustParser } from "./parser/src/RustParser";
import { CharStream, CommonTokenStream } from "antlr4ng";

export class RustEvaluator extends BasicEvaluator {
    constructor(conductor: IRunnerPlugin) {
        super(conductor);
    }

    async evaluateChunk(chunk: string): Promise<void> {
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RustParser(tokenStream);
            
            // Parse the input
            const tree = parser.expression();
            console.log(tree);
            
            // Evaluate the parsed tree
            // const result = this.visitor.visit(tree);
            
            // Send the result to the REPL
            // this.conductor.sendOutput(`Result of expression: ${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}