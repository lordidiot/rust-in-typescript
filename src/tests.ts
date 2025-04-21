import { IModulePlugin } from "conductor/dist/conductor/module";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { IPlugin } from "conductor/dist/conduit";
import * as fs from "fs";
import { Chunk, RunnerStatus } from "conductor/dist/conductor/types";
import { ConductorError } from "conductor/dist/common/errors";
import { ModuleClass } from "conductor/dist/conductor/module/types/ModuleClass";
import { PluginClass } from "conductor/dist/conduit/types";
import { RustEvaluator } from "./RustEvaluator";

class TestRunner implements IRunnerPlugin {
    private outputs: string[];

    constructor() {
        this.outputs = [];
    }

    sendOutput(output: string): void {
        this.outputs.push(output);
    }

    getOutputs(): string[] {
        return this.outputs;
    }

    clearOutputs(): void {
        this.outputs = [];
    }

    // Other methods from IRunnerPlugin that we don't need
    requestChunk(): Promise<Chunk> {
        throw new Error("Method not implemented.");
    }
    requestInput(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    tryRequestInput(): string | undefined {
        throw new Error("Method not implemented.");
    }
    registerPlugin<Arg extends any[], T extends IPlugin>(pluginClass: PluginClass<Arg, T>, ...arg: Arg): NoInfer<T> {
        throw new Error("Method not implemented.");
    }
    registerModule<T extends IModulePlugin>(moduleClass: ModuleClass<T>): T {
        throw new Error("Method not implemented.");
    }
    destroy?(): void {
        throw new Error("Method not implemented.");
    }
    requestFile(fileName: string): Promise<string | undefined> {
        throw new Error("Method not implemented.");
    }
    sendError(error: ConductorError): void {};
    updateStatus(status: RunnerStatus, isActive: boolean): void {};
    hostLoadPlugin(pluginName: string): void {};
    unregisterPlugin(plugin: IPlugin): void {};
    unregisterModule(module: IModulePlugin): void {};
    importAndRegisterExternalPlugin(location: string): Promise<IPlugin> {
        throw new Error("Method not implemented.");
    }
    importAndRegisterExternalModule(location: string): Promise<IModulePlugin> {
        throw new Error("Method not implemented.");
    }
}

const isDebug = process.argv.indexOf("--debug") !== -1;
const runner = new TestRunner();
const evaluator = new RustEvaluator(runner, isDebug);

function runTest(testName: string, code: string, expectedOutput: string[]) {
    runner.clearOutputs();
    evaluator.evaluateChunk(code);
    const outputs = runner.getOutputs();
    if (JSON.stringify(outputs) === JSON.stringify(expectedOutput)) {
        console.log(`[${testName}] passed`);
    } else {
        console.log(`[${testName}] failed`);
        console.log("Expected:", expectedOutput);
        console.log("Got:", outputs);
        console.log("")
    }
}

function runTestFromFilename(testName: string, filename: string, expectedOutput: string[]) {
    const data = fs.readFileSync(filename, "utf-8");
    runTest(testName, data, expectedOutput);
}

runTest("Basic literal",
`
fn main() {
    displayi32(32);
}
`, ["32"]);

runTestFromFilename("Basic sequential constructs", "examples/additional/basic.rs", ["0", "3", "6", "9"]);

runTestFromFilename("Box basic", "examples/additional/box.rs", ["32"]);

runTestFromFilename("Basic borrowing", "examples/additional/borrow.rs", ["32", "48", "48"]);

runTest("Missing variable type",
`
fn main() {
    let a = 32;
}
`, ["Error: Syntax error. line 3:10 mismatched input '=' expecting ':' at ="]);

runTest("Function calling",
`
fn foo(x: i32) -> Box<i32> {
    let b: Box<i32> = Box::new(x);
    b
}

fn main() {
    let a: Box<i32> = foo(123);
    displayi32(*a + 1);
}
`, ["124"]);

runTestFromFilename("Recursion", "examples/additional/recursion.rs", ["96"]);

runTest("Mutable references",
`
fn main() {
    let mut a: i32 = 32;
    let b: &mut i32 = &mut a;
    *b = 64;
    displayi32(a);
}
`, ["64"]);

runTestFromFilename("Mutable references (exclusive)", "examples/additional/mutualexclusion.rs", ["Error: cannot borrow a as mutable because it is also borrowed as immutable"]);

runTestFromFilename("Non-lexical lifetimes", "examples/additional/nll.rs", ["32", "48"]);

// Run all 10 testcases
runTestFromFilename("Testcase 1", "examples/testcase1.rs", ["0", "3", "6", "9"]);
runTestFromFilename("Testcase 2", "examples/testcase2.rs", ["123"]);
runTestFromFilename("Testcase 3", "examples/testcase3.rs", ["96"]);
runTestFromFilename("Testcase 4", "examples/testcase4.rs", ["32", "48", "48"]);
runTestFromFilename("Testcase 5", "examples/testcase5.rs", ["Error: cannot borrow a as mutable because it is also borrowed as immutable"]);
runTestFromFilename("Testcase 6", "examples/testcase6.rs", ["32", "48"]);
runTestFromFilename("Testcase 7", "examples/testcase7.rs", ["Error: cannot borrow a as mutable because it is also borrowed as immutable"]);
runTestFromFilename("Testcase 8", "examples/testcase8.rs", ["Error: cannot assign to a because it is borrowed"]);
runTestFromFilename("Testcase 9", "examples/testcase9.rs", ["1"]);
runTestFromFilename("Testcase 10", "examples/testcase10.rs", ["4"]);