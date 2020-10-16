import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'
import { fetchCardsDeck } from '../src/actions/cardsAction'
import Game from './game/Game'


const App =()=> {
  const dispatch = useDispatch()

  useEffect( ()=> {  
    dispatch(fetchCardsDeck())

  },[dispatch])

  return (
    <div className="App">
        <Game />
        
    </div>
  );
}

export default App;
