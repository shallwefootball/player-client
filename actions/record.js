import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const recordsUrl = dev.apiUrl + '/records/'
const recordUrl = dev.apiUrl + '/record/'

export const getRecords = matchId => {

  return dispatch => {

    fetch(recordsUrl + matchId, { method: 'get' })
    .then(res => (res.json())).then( ({records}) => {
      return dispatch(setRecords(records))
    })
  }
}

export const setRecord = ({lineupId, time, minutes, recordName}) => {

  return dispatch => {
    return fetch(recordUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lineupId,
        time,
        minutes,
        recordName
      })
    })
    .then(res => (res.json())).then( resJson => {
      return resJson
    })
  }
}

export const deleteRecord = recordId => {
  return dispatch => {

    return fetch(recordUrl + recordId, { method: 'delete' })
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