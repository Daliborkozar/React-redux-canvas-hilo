import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDrawCard } from '../src/actions/cardsAction'
import Game from './game/Game'


const App =()=> {
  const id = useSelector(state => state.cardReducer.deck_id)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchDrawCard(id))
  })
  return (
    <div className="App">
        <Game />
        
    </div>
  );
}

export default App;
