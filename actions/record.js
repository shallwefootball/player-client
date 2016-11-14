import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
import CONST from '../constraint'

export const getRecords = matchId => {

  return dispatch => {

    fetch(apiUrl.getRecords({ matchId }), { method: 'get' })
    .then(res => (res.json())).then( ({records}) => {
      return dispatch(setRecords(records))
    })
  }
}

export const setRecord = record => {

  return dispatch => {
    return fetch(apiUrl.getRecord(), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    })
    .then(res => (res.json())).then( resJson => {
      return resJson
    })
  }
}

export const deleteRecord = recordId => {
  return dispatch => {

    return fetch(apiUrl.getRecordRecordId({ recordId }), { method: 'delete' })
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