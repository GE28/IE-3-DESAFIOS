import React from 'react';
import Calculator from './components/Calculator';

export function App(): JSX.Element {
  return <main className='h-full bg-slate-500 flex justify-center items-center p-10'>
    <Calculator />
  </main>
};