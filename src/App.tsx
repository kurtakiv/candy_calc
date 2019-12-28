import React from 'react';
import './App.scss';
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
