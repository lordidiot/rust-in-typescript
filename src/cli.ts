import { IModulePlugin } from "conductor/dist/conductor/module";
import { SimpleLangEvaluator } from "./SimpleLangEvaluator";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { IPlugin } from "conductor/dist/conduit";
import * as fs from "fs";
import { Chunk, RunnerStatus } from "conductor/dist/conductor/types";
import { ConductorError } from "conductor/dist/common/errors";
import { ModuleClass } from "conductor/dist/conductor/module/types/ModuleClass";
import { PluginClass } from "conductor/dist/conduit/types";

// Simple console-based runner plugin
class ConsoleRunner implements IRunnerPlugin {
    sendOutput(output: string): void {
        console.log(output);
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

const filename = process.argv[2];

if (!filename) {
    console.error("Usage: node cli.js <filename>");
    process.exit(1);
}

const runner = new ConsoleRunner();
const evaluator = new SimpleLangEvaluator(runner);

fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
    } else {
        evaluator.evaluateChunk(data);
    }
});
