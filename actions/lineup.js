import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
// import CONST from '../constraint'

export const insertLineup = (matchId, players) => {
  return dispatch => {
    return fetch(apiUrl.getLineup(), {
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