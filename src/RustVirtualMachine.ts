export type Bytecode = 
    | { type: "LDCI", operand: number }
    | { type: "ADD" }
    | { type: "SUB" }
    | { type: "MUL" }
    | { type: "DIV" }
    | { type: "MOD" }
    | { type: "DONE" }

export const LDCI = (operand: number): Bytecode => ({ type: "LDCI", operand });
export const ADD = (): Bytecode => ({ type: "ADD" });
export const SUB = (): Bytecode => ({ type: "SUB" });
export const MUL = (): Bytecode => ({ type: "MUL" });
export const DIV = (): Bytecode => ({ type: "DIV" });
export const MOD = (): Bytecode => ({ type: "MOD" });
export const DONE = (): Bytecode => ({ type: "DONE" });

export class RustVirtualMachine {
    private operandStack: number[];
    private bytecode: Bytecode[];
    private pc: number;
    private heap: Heap;
    private heapSize: number;

    constructor(bytecode: Bytecode[], heapSize: number = 1000000) {
        this.bytecode = bytecode;
        this.heapSize = heapSize;
    }

    // Returns the updated program counter, based on the instruction
    step(): number {
        const ins = this.bytecode[this.pc];
        switch (ins.type) {
            case "LDCI": {
                const address = this.heap.allocatei32(ins.operand);
                this.operandStack.push(address);
                break;
            }
            case "ADD": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                this.operandStack.push(this.heap.geti32(a) + this.heap.geti32(b));
                break;
            }
            case "SUB": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                this.operandStack.push(this.heap.geti32(a) - this.heap.geti32(b));
                break;
            }
            case "MUL": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                this.operandStack.push(this.heap.geti32(a) * this.heap.geti32(b));
                break;
            }
            case "DIV": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                if (this.heap.geti32(b) === 0) throw new Error("Division by zero");
                this.operandStack.push(this.heap.geti32(a) / this.heap.geti32(b));
                break;
            }
            case "MOD": {
                const b = this.operandStack.pop()!;
                const a = this.operandStack.pop()!;
                if (this.heap.geti32(b) === 0) throw new Error("Division by zero");
                this.operandStack.push(this.heap.geti32(a) % this.heap.geti32(b));
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
        return this.operandStack.pop()!;
    }
}

export const WORD_SIZE = 8;
const INT_TAG = 0;

class Heap {
    private data: ArrayBuffer;
    private heapTop: number = 0;
    private heapSize: number;
    private view: DataView;

    constructor(heapSize: number) {
        this.heapSize = heapSize;
        this.data = new ArrayBuffer(heapSize);
        this.view = new DataView(this.data);
    }

    // Header: [1 byte tag] [4 bytes size] [3 bytes padding]
    // Automatically adds header size
    // Returns the address of the allocated memory
    allocate(tag: number, size: number): number {
        size += WORD_SIZE; // Add header size
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
    allocateInt(): number {
        const address = this.allocate(INT_TAG, WORD_SIZE);
        this.view.setInt32(address, 0);
        return address;
    }

    allocatei32(value: number): number {
        const address = this.allocateInt();
        this.view.setInt32(address, value);
        return address;
    }

    allocateu32(value: number): number {
        const address = this.allocateInt();
        this.view.setUint32(address, value);
        return address;
    }

    free(address: number): void {
        // TODO: Doesn't do anything right now
        // Remember to subtract header size (WORD_SIZE) from address
        // to get the actual address in the heap
    }

    // Helper functions
    geti32(address: number): number {
        return this.view.getInt32(address);
    }

    getu32(address: number): number {
        return this.view.getUint32(address);
    }

    seti32(address: number, value: number): void {
        this.view.setInt32(address, value);
    }

    setu32(address: number, value: number): void {
        this.view.setUint32(address, value);
    }


}
