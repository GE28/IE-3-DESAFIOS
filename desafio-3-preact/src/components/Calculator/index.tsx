import React, { useCallback } from 'react';
import { Operation, Addition, Multiplication, Division, Subtraction, Exponentiation } from './operations';
import './styles.css';

export default function Calculator(): JSX.Element {
    const [displayNumber, setDisplayNumber] = React.useState<number>(0);
    const [number, setNumber] = React.useState<number[]>([]);
    const [fractionaryDigitsCount, setFractionaryDigitsCount] = React.useState<number>(0);
    const [operation, setOperation] = React.useState<Operation>({} as Operation);

    const handleNumberClick = useCallback((value: number) => {
        if (fractionaryDigitsCount) {
            setDisplayNumber(displayNumber + value / Math.pow(10, fractionaryDigitsCount));
            setFractionaryDigitsCount(fractionaryDigitsCount + 1);
        } else
            setDisplayNumber(displayNumber * 10 + value);
    }, [displayNumber, fractionaryDigitsCount]);

    const clearNumber = useCallback(() => {
        setDisplayNumber(0);
        setFractionaryDigitsCount(0);
    }, []);

    const handleOperationClick = useCallback((operation: Operation) => {
        setOperation(operation);
        if (number.length > 0) return;
        setNumber([...number, displayNumber]);
        clearNumber();
    }, [number, displayNumber]);

    const handleEqualsClick = useCallback(() => {
        setDisplayNumber(operation.setOperands(...number, displayNumber).execute());
        setNumber([]);
    }, [number, displayNumber, operation]);

    const clearExpression = useCallback(() => {
        setNumber([]);
        setOperation({} as Operation);
        clearNumber();
    }, []);

    return <div className='calcContainer bg-slate-50 flex flex-col'>
        <div className='h-32 bg-slate-900'>
            <input disabled name="number" className='p-2 orientation-revert h-full w-full bg-transparent text-slate-50 text-5xl' value={displayNumber || number[number.length - 1] || ''}></input>
        </div>
        <div className='h-full w-full flex flex-col flex-wrap justify-start'>
            <div className='h-1/5 flex w-full'>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleOperationClick(new Addition())}>+</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleOperationClick(new Subtraction())}>-</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleOperationClick(new Division())}>÷</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleOperationClick(new Multiplication())}>&#xd7;</button>
            </div>
            <div className='h-1/5 flex w-full'>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(9)}>9</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(8)}>8</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(7)}>7</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => setDisplayNumber(0)}>C</button>
            </div>
            <div className='h-1/5 flex w-full'>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(6)}>6</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(5)}>5</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(4)}>4</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => clearExpression()}>CE</button>
            </div>
            <div className='h-1/5 flex w-full'>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(3)}>3</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(2)}>2</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleNumberClick(1)}>1</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-full text-center text-4xl' onClick={() => handleOperationClick(new Exponentiation())}>^</button>
            </div>
            <div className='h-1/5 flex w-full'>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-2/4 text-center text-4xl' onClick={() => handleNumberClick(0)}>0</button>
                <button className='flex justify-center active:bg-slate-300 items-center p-2 basis-1/4 text-center text-4xl' onClick={() => setFractionaryDigitsCount(Number(!fractionaryDigitsCount))}>.</button>
                <button className='flex justify-center active:bg-orange-300 items-center p-2 basis-1/4 text-center text-4xl bg-orange-500' onClick={() => handleEqualsClick()}>=</button>
            </div>
        </div>
        
    </div>;
}