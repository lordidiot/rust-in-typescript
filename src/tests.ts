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
    fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
        } else {
            runTest(testName, data, expectedOutput);
        }
    });
}

runTest("Basic literal",
`
fn main() {
    displayi32(32);
}
`, ["32"]);

runTestFromFilename("Box basic", "examples/box.rs", ["32"]);

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

runTest("Function calling",
`
fn add(x: i32, y: i32) -> i32 {
    if y == 0 {
        return x;
    } else {
        return add(x + 1, y - 1);
    }
}

fn main() {
    let a: i32 = 32;
    let b: i32 = 64;
    let c: i32 = add(a, b);
    displayi32(c);
}
`, ["96"]);


// runTestFromFilename("Borrow checking if-else", "examples/ifelse1.rs", []);

/*
runTest("Basic literal",
`
fn main() {
    let a: i32 = 32;
    let b: &mut i32 = &mut a;
    *b = 64;
    displayi32(a);
}
`, ["32"]);
*/