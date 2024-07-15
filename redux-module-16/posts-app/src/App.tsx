import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainSection } from './Components/MainSection/MainSection';
import { Head } from './Components/Head/Head';

function App() {
  return (
    <div className="Provider">
      <Head />
      <MainSection/>
    </div>
  );
}

export default App;
