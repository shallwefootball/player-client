import fetch from 'isomorphic-fetch'

import { dev } from '../config'
// import CONST from '../constraint'

const url = dev.apiUrl + '/lineup/'

export const insertLineup = (matchId, players) => {
  return dispatch => {
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({matchId: matchId, players: players})
    })
    .then(res => (res.json())).then( resJson => {
      return resJson
    })
  }
}