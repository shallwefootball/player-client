import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const url = dev.apiUrl + '/records/'


export const getRecords = matchId => {

  return dispatch => {

    fetch(url + matchId, { method: 'get' })
    .then(res => (res.json())).then( ({records}) => {
      return dispatch(setRecords(records))
    })
  }
}


const setRecords = records => {
  return {
    type: CONST.SET_RECORDS,
    records
  }
}