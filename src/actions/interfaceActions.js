import {
    RESET_GAME,
    PLACE_BET,
    NEW_GAME,
    BALANCE_WIN,
    BALANCE_LOOSE
} from './types'


export const placeBet = bet => {
    return {
        type: PLACE_BET,
        payload: bet
    }
}

export const balanceWin = data => {
    return {
        type: BALANCE_WIN,
        payload: parseInt(data)
    }
}

export const balanceLoose = data => {
    return {
        type: BALANCE_LOOSE,
        payload: parseInt(data)
    }
}

export const newGame = () => {
    return {
    type: NEW_GAME
    }
}

export const resetGAme = () => {
    return {
        type: RESET_GAME
    }
}


