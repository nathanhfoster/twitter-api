import C from '../constants.js'
import { combineReducers } from 'redux'

export const ApiResponse = (state = {}, action) => {
  switch(action.type) {
    case C.GET_COLLECTION_ENTRY: return {...state, CollectionEntry: action.payload}
    case C.GET_COLLECTION_LIST: return {...state, CollectionList: action.payload}
    case C.GET_COLLECTION_SHOW: return {...state, CollectionShow: action.payload}
    case C.GET_FAVORITE_LIST: return {...state, FavoriteList: action.payload}
    case C.GET_HOME_TIMELINE: return {...state, HomeTimeline: action.payload}
    case C.GET_MENTION_TIMELINE: return {...state, MentionTimeline: action.payload}
    case C.GET_STATUS_UPDATE: return {...state, StatusUpdate: action.payload}
    case C.GET_STATUS_USER_TIMELINE: return {...state, StatusUserTimeline: action.payload}
    default: return state
  }
}

export const appReducer = combineReducers({
  ApiResponse,
})
