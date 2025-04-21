import { notStrictEqual } from "assert";
import { BUILTIN_FUNCTIONS } from "./RustCompiler";

export type Bytecode = 
    | { type: "POP" }
    | { type: "LDCP", primitive: Value } // Load constant value primitive
    | { type: "ENTER_SCOPE", size: number }
    | { type: "EXIT_SCOPE" }
    | { type: "ENTER_LOOP" }
    | { type: "EXIT_LOOP" }
    | { type: "SET", frameIndex: number, localIndex: number, indirection: number }
    | { type: "GET", frameIndex: number, localIndex: number, indirection: number }
    | { type: "DEREF" }
    | { type: "WRITE" }
    | { type: "CALL", builtin: string | null }
    | { type: "RET" }
    | { type: "ADD" }
    | { type: "SUB" }
    | { type: "MUL" }
    | { type: "DIV" }
    | { type: "MOD" }
    | { type: "EQ" }
    | { type: "FREE", frameIndex: number, localIndex: number}
    | { type: "JOFR", skip: number } // Jump on false relative
    | { type: "GOTOR", skip: number} // Goto relative
    | { type: "DONE" }

export const POP = (): Bytecode => ({ type: "POP" });
export const LDCP = (primitive: Value): Bytecode => ({ type: "LDCP", primitive });
export const ENTER_SCOPE = (size: number): Bytecode => ({ type: "ENTER_SCOPE", size });
export const EXIT_SCOPE = (): Bytecode => ({ type: "EXIT_SCOPE" });
export const ENTER_LOOP = (): Bytecode => ({ type: "ENTER_LOOP" });
export const EXIT_LOOP = (): Bytecode => ({ type: "EXIT_LOOP" });
export const SET = (frameIndex: number, localIndex: number, indirection: number): Bytecode =>
    ({ type: "SET", frameIndex, localIndex, indirection });
export const GET = (frameIndex: number, localIndex: number, indirection: number): Bytecode =>
    ({ type: "GET", frameIndex, localIndex, indirection });
export const DEREF = (): Bytecode => ({ type: "DEREF" });
export const WRITE = (): Bytecode => ({ type: "WRITE" });
export const CALL = (builtin: string | null = null): Bytecode => ({ type: "CALL", builtin});
export const RET = (): Bytecode => ({ type: "RET" });
export const ADD = (): Bytecode => ({ type: "ADD" });
export const SUB = (): Bytecode => ({ type: "SUB" });
export const MUL = (): Bytecode => ({ type: "MUL" });
export const DIV = (): Bytecode => ({ type: "DIV" });
export const MOD = (): Bytecode => ({ type: "MOD" });
export const EQ = (): Bytecode => ({ type: "EQ" });
export const FREE = (frameIndex: number, localIndex: number): Bytecode => ({ type: "FREE", frameIndex, localIndex});
export const JOFR = (skip: number): Bytecode => ({ type: "JOFR", skip });
export const GOTOR = (skip: number): Bytecode => ({ type: "GOTOR", skip });
export const DONE = (): Bytecode => ({ type: "DONE" });

export class RustVirtualMachine {
    operandStack: Value[];
    private runtimeStack: RuntimeFrame[]; // TODO(IMPT): This should be inside the heap
    private bytecode: Bytecode[];
    private pc: number;
    heap: Heap;
    private heapSize: number;
    private env: Value;
    private isDebug: boolean;
    private topLevelEnvSize: number;

    constructor(bytecode: Bytecode[], topLevelEnvSize: number, heapSize: number = 1000000, isDebug: boolean = false) {
        this.bytecode = bytecode;
        this.heapSize = heapSize;
        this.isDebug = isDebug;
        this.topLevelEnvSize = topLevelEnvSize;
    }

    private peek(): Value {
        if (this.operandStack.length === 0) {
            throw new Error("Operand stack is empty");
        }
        return this.operandStack[this.operandStack.length - 1];
    }

    private prettifyOperandStack(): any[] {
        return this.operandStack.map(value => value.toString());
    }

    // Returns the updated program counter, based on the instruction
    step(): number {
        if (this.isDebug) {
            console.log(`PC: ${this.pc}, Instruction: ${JSON.stringify(this.bytecode[this.pc])}, Operand Stack: ${this.prettifyOperandStack()}`);
        }
        const ins = this.bytecode[this.pc];
        switch (ins.type) {
            case "POP": {
                this.operandStack.pop();
                break;
            }
            case "LDCP": {
                this.operandStack.push(ins.primitive); // TODO: Handle different types
                break;
            }
            case "ENTER_SCOPE": {
                const size = ins.size;
                const newEnv = this.heap.allocateEnvironment(this.env, size);
                this.env = newEnv;
                break;
            }
            case "EXIT_SCOPE": {
                const prevEnv = this.env;
                this.env = this.heap.getPairFirst(this.env);
                // TODO
                // free(this.heap.getPairSecond(prevEnv))
                // free(prevEnv)
                break;
            }
            case "ENTER_LOOP": {
                this.runtimeStack.push({
                    savedPc: -1, // Shouldn't be used
                    savedEnv: this.env,
                })
                break;
            }
            case "EXIT_LOOP": {
                const frame = this.runtimeStack.pop()!;
                while (!this.env.equals(frame.savedEnv)) {
                    this.env = this.heap.getPairFirst(this.env);
                    // TODO: Free
                    // this.heap.free(...);
                    // this.heap.free(...);
                }
                break;
            }
            case "SET": {
                const value = this.operandStack.pop!();
                const frameIndex = ins.frameIndex;
                const localIndex = ins.localIndex;
                let env = this.env;
                for (let i = 0; i < frameIndex; i++) {
                    env = this.heap.getPairFirst(env);
                }
                const frame = this.heap.getPairSecond(env);
                let address = frame.add((localIndex + 1) * WORD_SIZE); // Does this need to be a function
                for (let i = 0; i < ins.indirection; i++) {
                    address = this.heap.deference(address);
                }
                this.heap.setValue(address, value);
                break;
            }
            case "GET": {
                const frameIndex = ins.frameIndex;
                const localIndex = ins.localIndex;
                let env = this.env;
                for (let i = 0; i < frameIndex; i++) {
                    env = this.heap.getPairFirst(env);
                }
                const frame = this.heap.getPairSecond(env);
                let value = this.heap.getArrayElement(frame, localIndex);
                for (let i = 0; i < ins.indirection; i++) {
                    value = this.heap.deference(value);
                }
                if (ins.indirection == -1) { // Special case
                    value = frame.add((localIndex + 1) * WORD_SIZE);
                }
                this.operandStack.push(value);
                break;
            }
            case "DEREF": {
                let address = this.operandStack.pop()!;
                if (!address.isAddress()) {
                    throw new Error("Dereferencing non-address value");
                }
                this.operandStack.push(this.heap.deference(address));
                break;
            }
            case "WRITE": {
                const value = this.operandStack.pop()!;
                const address = this.operandStack.pop()!;
                if (!address.isAddress()) {
                    throw new Error("Dereferencing non-address value");
                }
                this.heap.setValue(address, value);
                break;
            }
            case "CALL": {
                // Special-case builtin function
                if (ins.builtin !== null) {
                    const builtin = BUILTIN_FUNCTIONS[ins.builtin];
                    builtin.fn(this);
                    return this.pc + 1;
                }
                const callPc = this.operandStack.pop()!; // TODO: Check?
                this.runtimeStack.push({
                    savedPc: this.pc + 1,
                    savedEnv: this.env,
                })
                return callPc.asu32(); // Change pc directly
            }
            case "RET": {
                const frame = this.runtimeStack.pop()!;
                while (!this.env.equals(frame.savedEnv)) {
                    this.env = this.heap.getPairFirst(this.env);
                    // TODO: Free
                    // this.heap.free(...);
                    // this.heap.free(...);
                }
                return frame.savedPc;
            };
            case "ADD": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                const res = Value.fromi32(a.asi32() + b.asi32());
                this.operandStack.push(res);
                break;
            }
            case "SUB": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                const res = Value.fromi32(a.asi32() - b.asi32());
                this.operandStack.push(res);
                break;
            }
            case "MUL": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                const res = Value.fromi32(a.asi32() * b.asi32());
                this.operandStack.push(res);
                break;
            }
            case "DIV": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                if (b.asi32() === 0) throw new Error("Division by zero");
                const res = Value.fromi32(Math.floor(a.asi32() / b.asi32()));
                break;
            }
            case "MOD": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                if (b.asi32() === 0) throw new Error("Division by zero");
                const res = Value.fromi32(a.asi32() % b.asi32());
                break;
            }
            case "EQ": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                // Naive equality check
                const res = Value.fromBool(a.equals(b));
                this.operandStack.push(res);
                break;
            }
            case "FREE": {
                //TODO

                // const frameIndex = ins.frameIndex;
                // const localIndex = ins.localIndex;
                // 
                // const addressToFree = 1;
                // this.heap.free(addressToFree);
                
                // if (this.isDebug) {
                //     console.log(`Freed memory at address: ${addressToFree}`);
                // }
                break;
            }
            case "JOFR": {
                const condition = this.operandStack.pop()!.asBool();
                if (!condition) { // Jump if false
                    return this.pc + 1 + ins.skip; // Returns the new program counter
                }
                break;
            }
            case "GOTOR": {
                return this.pc + 1 + ins.skip; // Returns the new program counter
            }
            case "DONE": {
                throw new Error("Should be unreachable");
            }
        }
        // Increment the program counter by default
        return this.pc + 1;
    }

    run(): number {
        this.pc = 0;
        this.heap = new Heap(this.heapSize);
        this.operandStack = [];
        this.runtimeStack = [];
        this.env = this.heap.allocateEnvironment(
            Value.fromAddress(0xffffffff), // Invalid address
            this.topLevelEnvSize
        );
        while (this.bytecode[this.pc].type !== "DONE") {
            this.pc = this.step();
        }
        return 0;
        // return this.operandStack.pop()!.asi32();
    }
}

type RuntimeFrame = {
    savedPc: number;
    savedEnv: Value;
}

// Defintion
// Value is a union type of [primitive, address]
// it is repesented as a number (integer), where the lowest 32-bits are the information
// the next 16-bits are the tag, storing the type of the value
export class Value {
    private tag: number; // unsigned 16-bit
    private value: number; // unsigned 32-bit

    static readonly INVALID_TAG = 0;
    static readonly ADDRESS_TAG = 1;
    static readonly PRIMITIVE_TAG = 2;

    static fromi32(value: number): Value {
        if (value < 0) {
            value = value + 0x100000000; // Convert to unsigned
        }
        return new Value(Value.PRIMITIVE_TAG, value);
    }

    static fromu32(value: number): Value {
        return new Value(Value.PRIMITIVE_TAG, value);
    }

    static fromAddress(value: number): Value {
        return new Value(Value.ADDRESS_TAG, value);
    }

    static fromBool(value: boolean): Value {
        return new Value(Value.PRIMITIVE_TAG, value ? 1 : 0);
    }

    constructor(tag: number, value: number) {
        this.tag = tag;
        this.value = value;
    }

    isAddress(): boolean {
        return this.tag === Value.ADDRESS_TAG;
    }

    isPrimitive(): boolean {
        return this.tag === Value.PRIMITIVE_TAG;
    }

    asu32(): number {
        return this.value;
    }

    asi32(): number {
        return this.value > 0x7FFFFFFF ?
            this.value - 0x100000000 :
            this.value;
    }

    asAddress(): number {
        return this.value;
    }

    asBool(): boolean {
        return this.value !== 0;
    }

    getTag(): number {
        return this.tag;
    }

    getValue(): number {
        return this.value;
    }

    add(other: number): Value {
        return new Value(this.tag, this.value + other);
    }

    toString(): string {
        if (this.isAddress()) {
            return `[addr ${this.value}]`;
        } else if (this.isPrimitive()) {
            return `[val ${this.value}]`;
        } else {
            return `[invalid]`;
        }
    }

    equals(other: Value): boolean {
        return this.tag === other.tag && this.value === other.value;
    }
}

export type address = number;
export const WORD_SIZE = 8;
const HALF_WORD_SIZE = 4;
const INT_TAG = 0;
const PAIR_TAG = 1;
const ARRAY_TAG = 2;
class Heap {
    private data: ArrayBuffer;
    private heapTop: address = 0;
    private heapSize: number;
    private view: DataView;
    private freeList: address[] = [];
    private allocations: Map<address, number> = new Map(); // Track allocated blocks

    constructor(heapSize: number) {
        this.heapSize = heapSize;
        this.data = new ArrayBuffer(heapSize);
        this.view = new DataView(this.data);
    }

    // Header: [1 byte tag] [4 bytes size] [3 bytes padding]
    // Automatically adds header size
    // Returns the address of the allocated memory
    allocate(tag: number, size: number): Value {
        size += WORD_SIZE; // Add header size

        // First try to reuse freed blocks
        for (let i = 0; i < this.freeList.length; i++) {
            const candidate = this.freeList[i];
            const candidateSize = this.view.getUint32(candidate - WORD_SIZE + 1);
            
            if (candidateSize >= size) {
                // Found a suitable free block
                this.freeList.splice(i, 1);
                this.view.setUint8(candidate - WORD_SIZE, tag);
                this.view.setUint32(candidate - WORD_SIZE + 1, size);
                this.allocations.set(candidate, size);
                return Value.fromAddress(candidate);
            }
        }

        if (this.heapTop + size > this.heapSize) {
            throw new Error("Heap overflow");
        }
        const address = this.heapTop;
        this.heapTop += size;
        this.view.setUint8(address, tag);
        this.view.setUint32(address + 1, size);
        return Value.fromAddress(address + WORD_SIZE);
    }

    // [8 bytes value]
    allocateInt(): Value {
        const address = this.allocate(INT_TAG, WORD_SIZE);
        return address;
    }

    /*
    allocatei32(value: number): address {
        const address = this.allocateInt();
        this.view.setInt32(address, value);
        return address;
    }

    allocateu32(value: number): address {
        const address = this.allocateInt();
        this.view.setUint32(address, value);
        return address;
    }
    */

    // [8 bytes first] [8 bytes second]
    // For simplicity, pair elements are **always** values
    // A little bit wasteful, but clearer to use WORD_SIZE per field
    allocatePair(): Value {
        return this.allocate(PAIR_TAG, 2 * WORD_SIZE);
    }

    // [8 bytes length] [8 * length bytes data]
    // For simplicity, array elements are **always** values
    allocateArray(length: number): Value {
        const address = this.allocate(ARRAY_TAG, (length + 1) * WORD_SIZE);
        this.view.setUint32(address.asAddress(), length);
        return address;
    }

    allocateEnvironment(previousEnv: Value, frameSize: number): Value {
        const frame = this.allocateArray(frameSize);
        const env = this.allocatePair();
        this.setPairFirst(env, previousEnv);
        this.setPairSecond(env, frame);
        return env;
    }

    free(address: address): void {
        // TODO: Doesn't do anything right now
        // Remember to subtract header size (WORD_SIZE) from address
        // to get the actual address in the heap
        const headerAddress = address - WORD_SIZE;
        
        // Verify this is a valid allocation
        if (!this.allocations.has(address)) {
            throw new Error(`Attempt to free invalid address: ${address}`);
        }
        const size = this.view.getUint32(headerAddress + 1);
        this.freeList.push(headerAddress);
        this.allocations.delete(address);
        
        // Zero out the memory
        for (let i = 0; i < size; i++) {
            this.view.setUint8(headerAddress + i, 0);
        }
        
        this.view.setUint8(headerAddress, 255); // Special "freed" tag
    }

    // Helper functions
    // TODO: Add checks for type confusion
    getValue(address: Value): Value {
        const val = this.view.getUint32(address.asAddress());
        const tag = this.view.getUint16(address.asAddress() + HALF_WORD_SIZE);
        return new Value(tag, val);
    }

    setValue(address: Value, value: Value): void {
        this.view.setUint32(address.asAddress(), value.getValue());
        this.view.setUint16(address.asAddress() + HALF_WORD_SIZE, value.getTag());
    }

    getTag(address: Value): number {
        return this.view.getUint8(address.asAddress() - WORD_SIZE);
    }

    getPairFirst(pair: Value): Value {
        return this.getValue(pair);
    }

    getPairSecond(pair: Value): Value {
        return this.getValue(pair.add(WORD_SIZE));
    }

    setPairFirst(pair: Value, value: Value): void {
        this.setValue(pair, value);
    }

    setPairSecond(pair: Value, value: Value): void {
        this.setValue(pair.add(WORD_SIZE), value);
    }

    getArrayLength(address: Value): number {
        return this.view.getInt32(address.asAddress());
    }

    getArrayElement(array: Value, index: number): Value {
        if (index < 0 || index >= this.getArrayLength(array)) {
            throw new Error("Array index out of bounds");
        }
        return this.getValue(array.add((index + 1) * WORD_SIZE))
    }

    setArrayElement(array: Value, index: number, value: Value): void {
        if (index < 0 || index >= this.getArrayLength(array)) {
            throw new Error("Array index out of bounds");
        }
        this.setValue(array.add((index + 1) * WORD_SIZE), value);
    }

    deference(address: Value): Value {
        if (!address.isAddress()) { // TODO: Can remove this once compiler is done
                                    // Compiler should guarantee that no type confusions occur
            throw new Error("Dereferencing non-address value");
        }
        return this.getValue(address);
    }
}
