import C from '../constants'
import axios from 'axios'

const Axios = axios.create({
    withCredentials: true,
    baseURL: 'https://ga2pbkjmo5.execute-api.us-west-1.amazonaws.com/coredeployment/',
    timeout: 10000,
    "async": true,
    "crossDomain": true,
    mode:'cors',
    headers: {
      'id': 'custom-539487832448843776',
      'Cache-Control': 'no-cache',
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
  })

export const getCollectionEntry = () => {
  return async (dispatch) => await Axios.get('collectionentry')
      .then(res => {
        dispatch({
          type: C.GET_COLLECTION_ENTRY,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}

export const getCollectionList = () => {
  return async (dispatch) => await Axios.get('collectionlist')
      .then(res => {
        dispatch({
          type: C.GET_COLLECTION_LIST,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}

export const getCollectionShow = () => {
  return async (dispatch) => await Axios.get('collectionshow')
      .then(res => {
        dispatch({
          type: C.GET_COLLECTION_SHOW,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}

export const getFavoriteList = () => {
  return async (dispatch) => await Axios.get('favoritelist')
      .then(res => {
        dispatch({
          type: C.GET_FAVORITE_LIST,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}

export const getHomeTimeline = () => {
  return async (dispatch) => await Axios.get('hometimeline')
      .then(res => {
        dispatch({
          type: C.GET_HOME_TIMELINE,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}

export const getMentionTimeline = () => {
  return async (dispatch) => await Axios.get('mentiontimeline')
      .then(res => {
        dispatch({
          type: C.GET_MENTION_TIMELINE,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}

export const getStatusUpdate = payload => {
  return async (dispatch) => await Axios.post('statusupdate', payload)
      .then(res => {
        dispatch({
          type: C.GET_STATUS_UPDATE,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}

export const getStatusUserTimeline = () => {
  return async (dispatch) => await Axios.get('statususertimeline')
      .then(res => {
        dispatch({
          type: C.GET_STATUS_USER_TIMELINE,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}