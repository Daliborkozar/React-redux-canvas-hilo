import {
    RESET_GAME,
    PLACE_BET,
    NEW_GAME,
} from './types'


export const placeBet = bet => {
    return {
        type: PLACE_BET,
        payload: bet
    }
}

export const newGame = () => {
    return {
    type: NEW_GAME
    }
}

export const resetGame = () => {
    return {
        type: RESET_GAME
    }
}



