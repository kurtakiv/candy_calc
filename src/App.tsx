import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {ICandy} from './types';
import Grid from "./components/Grid";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
       <Grid/>
      </header>
    </div>
  );
}

export default App;
