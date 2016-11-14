import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
import CONST from '../constraint'

export const getTeam = clubId => {

  return dispatch => {

    fetch(apiUrl.getTeam({ clubId }), { method: 'get' })
    .then(res => (res.json())).then( ({team}) => {
      return dispatch(setTeam(team))
    })
  }
}


const setTeam = team => {
  return {
    type: CONST.SET_TEAM,
    team
  }
}