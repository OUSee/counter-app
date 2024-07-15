import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainSection } from './Components/MainSection/MainSection';
import { Head } from './Components/Head/Head';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}  >
      <Head />
      <MainSection/>
    </Provider>
  );
}

export default App;
