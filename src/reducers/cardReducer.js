import { 
    FETCH_CARDS_REQUEST,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAIL,
    FETCH_DRAWCARD_REQUEST,
    FETCH_DRAWCARD_SUCCESS,
    FETCH_DRAWCARD_FAIL

} from '../actions/types'

const initialState={
    deck_id: null,
    remaining: null,
    error:'',
    loading: false   
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
                error: ''
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
                error: ''
            }
        case FETCH_DRAWCARD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default: return state
    }
}

export default cardReducer