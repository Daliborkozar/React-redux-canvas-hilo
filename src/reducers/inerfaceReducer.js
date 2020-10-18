
import {
    
    PLACE_BET,
    GAME_STATUS,
    BALANCE_WIN,
    BALANCE_LOOSE,
    RESET_GAME
    
} from '../actions/types'

const initialState = {
    bet: 10,
    playerBalance: 100
    
}

export const interfaceReducer = (state=initialState, action) => {
    switch (action.type){
        case PLACE_BET:
            return {
                ...state,
                bet: action.payload
            }
        case BALANCE_WIN:
            return {
                ...state,
                playerBalance: state.playerBalance + state.bet
            }
        case BALANCE_LOOSE:
            return {
                ...state,
                playerBalance: state.playerBalance - state.bet
            }
        case GAME_STATUS:
            return {
                ...state,
                bet: state.bet > state.playerBalance ? state.playerBalance : state.bet
            }
        case RESET_GAME:
            return {
                ...initialState
            }
        default: return state
        
    }
}


