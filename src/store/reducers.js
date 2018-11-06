import C from '../constants.js'
import { combineReducers } from 'redux'

export const ApiResponse = (state = {}, action) => {
  switch(action.type) {
    case C.GET_COLLECTION:
      return {...state, Collection: action.payload}
    case C.GET_USER:
      return {...state, User: action.payload}
    case C.SET_LOGOUT:
      return {}
    default:
      return state
  }
}

export const appReducer = combineReducers({
  ApiResponse,
})
