import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const url = dev.apiUrl + '/team/'


export const getTeam = clubId => {

  return dispatch => {

    fetch(url + clubId, { method: 'get' })
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