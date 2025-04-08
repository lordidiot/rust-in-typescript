export type Bytecode = 
    | { type: "POP" }
    | { type: "LDCI", operand: number }
    | { type: "ENTER_SCOPE", size: number }
    | { type: "EXIT_SCOPE" }
    | { type: "SET", frameIndex: number, localIndex: number }
    | { type: "GET", frameIndex: number, localIndex: number }
    | { type: "ADD" }
    | { type: "SUB" }
    | { type: "MUL" }
    | { type: "DIV" }
    | { type: "MOD" }
    | { type: "FREE" , frameIndex: number, localIndex: number}
    | { type: "DONE" }

export const POP = (): Bytecode => ({ type: "POP" });
export const LDCI = (operand: number): Bytecode => ({ type: "LDCI", operand });
export const ENTER_SCOPE = (size: number): Bytecode => ({ type: "ENTER_SCOPE", size });
export const EXIT_SCOPE = (): Bytecode => ({ type: "EXIT_SCOPE" });
export const SET = (frameIndex: number, localIndex: number): Bytecode => ({ type: "SET", frameIndex, localIndex });
export const GET = (frameIndex: number, localIndex: number): Bytecode => ({ type: "GET", frameIndex, localIndex });
export const ADD = (): Bytecode => ({ type: "ADD" });
export const SUB = (): Bytecode => ({ type: "SUB" });
export const MUL = (): Bytecode => ({ type: "MUL" });
export const DIV = (): Bytecode => ({ type: "DIV" });
export const MOD = (): Bytecode => ({ type: "MOD" });
export const FREE = (frameIndex: number, localIndex: number): Bytecode => ({ type: "FREE", frameIndex, localIndex});
export const DONE = (): Bytecode => ({ type: "DONE" });

export class RustVirtualMachine {
    private operandStack: address[];
    private bytecode: Bytecode[];
    private pc: number;
    private heap: Heap;
    private heapSize: number;
    private env: address;
    private isDebug: boolean;

    constructor(bytecode: Bytecode[], heapSize: number = 1000000, isDebug: boolean = false) {
        this.bytecode = bytecode;
        this.heapSize = heapSize;
        this.isDebug = isDebug;
    }

    private peek(): address {
        if (this.operandStack.length === 0) {
            throw new Error("Operand stack is empty");
        }
        return this.operandStack[this.operandStack.length - 1];
    }

    private popInt(): number {
        const address = this.operandStack.pop()!;
        const tag = this.heap.getTag(address);
        if (tag !== INT_TAG) {
            throw new Error(`Expected INT_TAG, got ${tag}`);
        }
        const value = this.heap.geti32(address);
        return value;
    }

    private dereferenceOperandStack(): any[] {
        return this.operandStack.map(address => {
            const tag = this.heap.getTag(address);
            if (tag === INT_TAG) {
                return this.heap.geti32(address);
            } else {
                return "unhandled";
            }
        });
    }

    // Returns the updated program counter, based on the instruction
    step(): number {
        if (this.isDebug) {
            console.log(`PC: ${this.pc}, Instruction: ${JSON.stringify(this.bytecode[this.pc])}, Operand Stack: ${this.dereferenceOperandStack()}`);
        }
        const ins = this.bytecode[this.pc];
        switch (ins.type) {
            case "POP": {
                this.operandStack.pop();
                break;
            }
            case "LDCI": {
                const address = this.heap.allocatei32(ins.operand);
                this.operandStack.push(address);
                break;
            }
            case "ENTER_SCOPE": {
                const size = ins.size;
                const newEnv = this.heap.allocateEnvironment(this.env, size);
                this.env = newEnv;
                break;
            }
            case "EXIT_SCOPE": {
                this.env = this.heap.getPairFirst(this.env);
                break;
            }
            case "SET": {
                const value = this.peek();
                const frameIndex = ins.frameIndex;
                const localIndex = ins.localIndex;
                let env = this.env;
                for (let i = 0; i < frameIndex; i++) {
                    env = this.heap.getPairFirst(env);
                }
                const frame = this.heap.getPairSecond(env);
                this.heap.setArrayElement(frame, localIndex, value);
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
                const value = this.heap.getArrayElement(frame, localIndex);
                this.operandStack.push(value);
                break;
            }
            case "ADD": {
                const b = this.popInt();
                const a = this.popInt();
                this.operandStack.push(this.heap.allocatei32(a + b));
                break;
            }
            case "SUB": {
                const b = this.popInt();
                const a = this.popInt();
                this.operandStack.push(this.heap.allocatei32(a - b));
                break;
            }
            case "MUL": {
                const b = this.popInt();
                const a = this.popInt();
                this.operandStack.push(this.heap.allocatei32(a * b));
                break;
            }
            case "DIV": {
                const b = this.popInt();
                const a = this.popInt();
                if (b === 0) throw new Error("Division by zero");
                this.operandStack.push(this.heap.allocatei32(Math.floor(a / b)));
                break;
            }
            case "MOD": {
                const b = this.popInt();
                const a = this.popInt();
                if (b === 0) throw new Error("Division by zero");
                this.operandStack.push(this.heap.allocatei32(a % b));
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

        while (this.bytecode[this.pc].type !== "DONE") {
            this.pc = this.step();
        }
        return this.popInt()!;
    }
}

export type address = number;
export const WORD_SIZE = 8;
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
    allocate(tag: number, size: number): address {
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
                return candidate;
            }
        }

        if (this.heapTop + size > this.heapSize) {
            throw new Error("Heap overflow");
        }
        const address = this.heapTop;
        this.heapTop += size;
        this.view.setUint8(address, tag);
        this.view.setUint32(address + 1, size);
        return address + WORD_SIZE;
    }

    // [8 bytes value]
    allocateInt(): address {
        const address = this.allocate(INT_TAG, WORD_SIZE);
        this.view.setInt32(address, 0);
        return address;
    }

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

    // [8 bytes first] [8 bytes second]
    // For simplicity, pair elements are **always** addresses
    // A little bit wasteful, but clearer to use WORD_SIZE per field
    allocatePair(): address {
        return this.allocate(PAIR_TAG, 2 * WORD_SIZE);
    }

    // [8 bytes length] [8 * length bytes data]
    // For simplicity, array elements are **always** addresses
    allocateArray(length: number): address {
        const address = this.allocate(ARRAY_TAG, (length + 1) * WORD_SIZE);
        this.view.setInt32(address, length);
        return address;
    }

    allocateEnvironment(previousEnv: address, frameSize: number): address {
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
    geti32(address: address): number {
        return this.view.getInt32(address);
    }

    getu32(address: address): number {
        return this.view.getUint32(address);
    }

    seti32(address: address, value: number): void {
        this.view.setInt32(address, value);
    }

    setu32(address: address, value: number): void {
        this.view.setUint32(address, value);
    }

    getTag(address: address): number {
        return this.view.getUint8(address - WORD_SIZE);
    }

    getPairFirst(pair: address): address {
        return this.view.getInt32(pair);
    }

    getPairSecond(pair: address): address {
        return this.view.getInt32(pair + WORD_SIZE);
    }

    setPairFirst(pair: address, value: address): void {
        this.view.setInt32(pair, value);
    }

    setPairSecond(pair: address, value: address): void {
        this.view.setInt32(pair + WORD_SIZE, value);
    }

    getArrayLength(address: address): number {
        return this.view.getInt32(address);
    }

    getArrayElement(array: address, index: number): address {
        if (index < 0 || index >= this.getArrayLength(array)) {
            throw new Error("Array index out of bounds");
        }
        return this.view.getInt32(array + (index + 1) * WORD_SIZE);
    }

    setArrayElement(array: address, index: number, value: address): void {
        if (index < 0 || index >= this.getArrayLength(array)) {
            throw new Error("Array index out of bounds");
        }
        this.view.setInt32(array + (index + 1) * WORD_SIZE, value);
    }
}
