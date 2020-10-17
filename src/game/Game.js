import React, {useEffect} from 'react';
import { Interface } from './Interface'
import { CardBoard } from './CardBoard'
import { useDispatch } from 'react-redux'
import {fetchCardsDeck} from '../actions/cardsAction'

const Game =()=> {
    
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

export default Game;
