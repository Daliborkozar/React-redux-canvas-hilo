import { 
    FETCH_CARDS_REQUEST,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAIL,
    FETCH_DRAWCARD_REQUEST,
    FETCH_DRAWCARD_SUCCESS,
    FETCH_DRAWCARD_FAIL,
    RESET_GAME

} from '../actions/types'

const initialState={
    deck_id: null,
    remaining: null,
    error:'',
    loading: false, 
    playedCards: [],
    currentCard: [],
    previousCard: null
}

const cardReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_CARDS_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case FETCH_CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                deck_id: action.payload.deck_id,
                remaining: action.payload.remaining,
                error: '',
                
                
            }
        case FETCH_CARDS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_DRAWCARD_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case FETCH_DRAWCARD_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: '',
                previousCard: state.currentCard,
                currentCard: action.payload.cards[0],
                playedCards: [...state.playedCards, action.payload.cards[0].image]

            }
        case FETCH_DRAWCARD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case RESET_GAME:
            return {
                ...initialState
            }
        
        default: return state
    }
}

export default cardReducer