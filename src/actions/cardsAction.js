import { FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAIL} from './types'
import axios from 'axios'

// fetch card request
export const fetchCardsRequest = ()=>{
    return {
        type: FETCH_CARDS_REQUEST
    }
}

//store cards if success

export const fetchCardsSuccess = (cards) => {
    return {
        type: FETCH_CARDS_SUCCESS,
        payload: cards
    }
}

// store error message

export const fetchCardsFail = (error) => {
    return {
        type: FETCH_CARDS_FAIL,
        payload: error
    }
}

export const fetchCardsDeck =()=> (dispatch) => {
    //loading:true
    fetchCardsRequest()
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response =>{
            const data= response.data
            dispatch(fetchCardsSuccess(data))
        })
        .catch(error => {
            dispatch(fetchCardsFail(error.message))
        })
}