type calculation = (x: number, y: number) => number;

export abstract class Operation {
    private _operands: number[] = [];
    protected abstract _symbol: string;
    protected abstract _calculation: calculation;
    
    setOperands(...operands: number[]) {
        this._operands = operands;
        return this;
    }
    
    toString(): string {
        return this._operands.join(` ${this._symbol} `);
    }

    execute(): number {
        return this._operands.reduce((x, y) => this._calculation(x, y));
    }
};

export class Multiplication extends Operation {
    _symbol = '*';
    _calculation = (x: number, y: number) => x * y;
}

export class Division extends Operation {
    _symbol = '/';
    _calculation = (x: number, y: number) => x / y;
}

export class Addition extends Operation {
    _symbol = '+';
    _calculation = (x: number, y: number) => x + y;
}

export class Subtraction extends Operation {
    _symbol = '-';
    _calculation = (x: number, y: number) => x - y;
}

export class Exponentiation extends Operation {
    _symbol = '^';
    _calculation = (x: number, y: number) => Math.pow(x, y);
}