import { combineReducers } from 'redux'
import cardReducer from './cardReducer'
import interFace from './inerfaceReducer'

export default combineReducers({
    cardReducer,
    interFace
})