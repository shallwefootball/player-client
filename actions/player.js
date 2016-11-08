import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const url = dev.apiUrl + '/players/'


export const getPlayers = clubId => {

  return dispatch => {

    fetch(url + clubId, { method: 'get' })
    .then(res => (res.json())).then( ({players}) => {
      return dispatch(setPlayers(players))
    })
  }
}


export const setPlayers = players => {
  return {
    type: CONST.SET_PLAYERS,
    players
  }
}

