import fetch from 'isomorphic-fetch'

import config from '../config'
import CONST from '../constraint'

const url = config.dev.apiUrl + '/clubs/'


export const getClubs = leagueId => {

  return dispatch => {

    fetch(url + leagueId, { method: 'get' })
    .then(res => (res.json())).then( ({clubs}) => {
      dispatch(setClubs(clubs))
    })
  }
}


const setClubs = clubs => {
  return {
    type: CONST.SET_CLUBS,
    clubs
  }
}