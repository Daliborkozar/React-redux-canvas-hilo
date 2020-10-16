import { combineReducers } from 'redux'
import cardReducer from './cardReducer'
import {interfaceReducer} from './inerfaceReducer'

export default combineReducers({
    cardReducer,
    interfaceReducer
})