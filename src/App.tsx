import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Head } from './Components/Head/Head';
import { Counter } from './Components/Counter/Counter';
import { counterContext } from './Context/CounterContext';


function App() {

  const [count, setCount] = useState(0);

  const CounterProvider = counterContext.Provider;

  return (
    <CounterProvider value={{value: count, onChange: setCount}}>
      <Head />
      <Counter />
    </CounterProvider>
  );
}

export default App;
