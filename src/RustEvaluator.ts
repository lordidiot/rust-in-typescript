import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLexer } from "./parser/src/RustLexer";
import { RustParser } from "./parser/src/RustParser";
import { ATNSimulator, BaseErrorListener, CharStream, CommonTokenStream, ParseTree, RecognitionException, Recognizer, Token } from "antlr4ng";
import { Bytecode, DONE, RustVirtualMachine } from "./RustVirtualMachine";
import { RustCompilerVisitor, RustTypeCheckerVisitor, countVariableUsages, BorrowCheckingVisitor } from "./RustCompiler";

export class RustEvaluator extends BasicEvaluator {
    private isDebug: boolean;

    constructor(conductor: IRunnerPlugin, isDebug: boolean = false) {
        super(conductor);
        this.isDebug = isDebug;
    }

    async evaluateChunk(chunk: string): Promise<void> {
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RustParser(tokenStream);
            parser.removeErrorListeners();
            parser.addErrorListener(new ThrowingErrorListener());

            // Type check
            const tree = parser.crate();
            if (this.isDebug) {
                console.log(prettyPrint(tree.toStringTree(parser)));
            }
            const typeCheckVisitor = new RustTypeCheckerVisitor();
            typeCheckVisitor.visit(tree);

            //Borrow Check
            const borrowCheckerVisitor = new BorrowCheckingVisitor();
            borrowCheckerVisitor.visit(tree);
            
            // Compile
            if (this.isDebug) {
                // console.log(prettyPrint(tree.toStringTree(parser)));
            }
            const compilerVisitor = new RustCompilerVisitor();
            compilerVisitor.visit(tree);
            const bytecode = compilerVisitor.bytecode;
            const topLevelEnvSize = compilerVisitor.compilerEnv.locals.length;

            // Run the bytecode
            const outputFn = (output: string) => {
                this.conductor.sendOutput(output);
            }
            const vm = new RustVirtualMachine(bytecode, topLevelEnvSize, 1000000, this.isDebug, outputFn);
            if (this.isDebug) {
                console.log("Bytecode:");
                prettyPrintBytecode(bytecode);
            }
            vm.run();
        }  catch (error) {
            // Handle errors and send them to the REPL
            // Print stack trace for debugging
            if (this.isDebug) {
                console.error("Error stack trace:");
                console.error(error.stack);
            }
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}

class ThrowingErrorListener extends BaseErrorListener {
    syntaxError<S extends Token, T extends ATNSimulator>(recognizer: Recognizer<T>, offendingSymbol: S | null, line: number, column: number, msg: string, e: RecognitionException | null): void {
        let errorMessage = `Syntax error. line ${line}:${column} ${msg}`;
        if (offendingSymbol) {
            errorMessage += ` at ${offendingSymbol.text}`;
        }
        throw new Error(errorMessage);
    }
}

function prettyPrint(input: string): string {
    // Tokenize the input into an array of tokens (parentheses or non‐whitespace strings)
    const tokens = input.match(/[\(\)]|[^()\s]+/g) || [];

    // Recursively parse tokens into a nested array structure.
    function parse(tokens: string[]): any {
        const res: any[] = [];
        while (tokens.length > 0) {
            const token = tokens.shift();
            if (token === "(") {
                res.push(parse(tokens));
            } else if (token === ")") {
                return res;
            } else {
                res.push(token);
            }
        }
        return res;
    }
    
    const parsed = parse(tokens);

    // Recursively format the parsed structure into a pretty-printed string.
    function format(tree: any, indent: number): string {
        if (typeof tree === "string") return tree;
        let result = "";
        for (let i = 0; i < tree.length; i++) {
            const item = tree[i];
            if (Array.isArray(item)) {
                // Format nested arrays on their own indented lines.
                result += "\n" + " ".repeat(indent) + "(" + format(item, indent + 2) + "\n" + " ".repeat(indent) + ")";
            } else {
                // For non-array tokens, add a space between tokens unless it's the first token.
                result += (i === 0 ? "" : " ") + item;
            }
        }
        return result;
    }
    
    return format(parsed, 0);
}

function prettyPrintBytecode(bytecode: Bytecode[]) {
    bytecode.forEach((inst, idx) => {
        switch (inst.type) {
            case "JOFR":
            case "GOTOR":
                console.log("\t", idx, inst, "@", idx + 1 + inst.skip)
                break;
            default:
                console.log("\t", idx, inst)
        }
    })
}
