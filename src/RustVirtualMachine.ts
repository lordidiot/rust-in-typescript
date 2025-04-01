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
