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

export const setRecord = () => {
  return dispatch => {
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        matchId: matchId,
        players: players
      })
    })
    .then(res => (res.json())).then( resJson => {
      return resJson
    })
  }
}


const setRecords = records => {
  return {
    type: CONST.SET_RECORDS,
    records
  }
}