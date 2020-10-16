import React, {useEffect} from 'react';
import './App.css';
import {Interface} from './game/Interface'
import {CardBoard} from './game/CardBoard'
import { useDispatch } from 'react-redux'
import { fetchCardsDeck } from './actions/cardsAction'




const App =( )=> {
  const dispatch = useDispatch()
  
  useEffect( ()=> {
    
    dispatch(fetchCardsDeck())

  },[dispatch])

  return (
    <div className="App">
        <CardBoard />
        <Interface />
    </div>
  );
}

export default App;
