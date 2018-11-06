import C from '../constants'
import axios from 'axios'

const Axios = axios.create({
    withCredentials: true,
    baseURL: 'https://ga2pbkjmo5.execute-api.us-west-1.amazonaws.com/',
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


export const getCollection = () => {
  return async (dispatch) => await Axios.get('coredeployment/collectionentry')
      .then(res => {
        dispatch({
          type: C.GET_COLLECTION,
          payload: res.data
        })
      }).catch((e) => console.log("ERROR: ", e))
}