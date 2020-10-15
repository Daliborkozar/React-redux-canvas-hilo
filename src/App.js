import React from 'react';
import './App.css';
import {Interface} from './game/Interface'
import {CardBoard} from './game/CardBoard'



const App =() => {
  

  return (
    <div className="App">
        <CardBoard />
        <Interface />
    </div>
  );
}

export default App;
