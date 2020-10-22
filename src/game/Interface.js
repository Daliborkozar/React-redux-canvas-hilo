import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchDrawCard ,reset} from '../actions/cardsAction'
import { placeBet, resetGame} from '../actions/interfaceActions'



export const Interface = ( ) => {
    const { bet, playerBalance }   = useSelector(state => state.interfaceReducer)
    const { deck_id , currentCard} = useSelector(state => state.cardReducer)


    const [ newBet, setBet] = useState(bet)
    const dispatch = useDispatch()

    const compareCards = (hilo) => {
        dispatch(fetchDrawCard(deck_id, currentCard, hilo))
    }

    const changeBetHandler = e => {
            setBet(Number(e.target.value))
        }
    

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(bet >= 10 && playerBalance >= bet) {    
        dispatch(placeBet(newBet))
        }
    }
    //compare cards 
    return (
        <div>
            <div className='container'>
                <button>NEW</button>
                <span>balance:{playerBalance}</span>
                <button onClick={() => compareCards('high')}>HiGH</button>
                <button onClick={() => compareCards('low')}>LOW</button>
                <form onSubmit={onSubmitHandler}>
                <label htmlFor="quantity">Bet: (between 10 and {`${playerBalance}`}):</label>
                <input  name='bet'  placeholder='place your bet' type='number' variant="outlined" size="small"  onChange={changeBetHandler} />
                <button type="submit">Place your Bet</button>
                </form>
                
                <button>RESET GAME</button>
            </div>
        </div>
    )
}
