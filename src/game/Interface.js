import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchDrawCard} from '../actions/cardsAction'
import {placeBet} from '../actions/interfaceActions'


export const Interface = ( ) => {
    const { bet, playerBalance }   = useSelector(state => state.interfaceReducer)
    const { deck_id , currentCard} = useSelector(state => state.cardReducer)

    const [ newBet, setBet] = useState(bet)
    const dispatch = useDispatch()

    const compareCards = () => {
        dispatch(fetchDrawCard(deck_id, currentCard))
    }

    const changeBetHandler = e => {
            setBet(e.target.value)
        }
    

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(bet >= 10 && playerBalance >= bet) {    
        dispatch(placeBet(newBet))
        }
    }

    return (
        <div>
            <div className='container'>
                <button>NEW</button>
                <span>balance:{playerBalance}</span>
                <button onClick={() => compareCards()}>HiGH</button>
                <button>LOW</button>
                <form onSubmit={onSubmitHandler}>
                <label htmlFor="quantity">Bet: (between 10 and {`${playerBalance}`}):</label>
                <input  name='bet'  value={bet} placeholder='place your bet' type='number' variant="outlined" size="small"  onChange={changeBetHandler} />
                <button type="submit">Place your Bet</button>
                </form>
                <button>RESET</button>
            </div>
        </div>
    )
}
