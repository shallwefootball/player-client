import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
import CONST from '../constraint'

export const getLeagues = () => {

  return dispatch => {

    fetch(apiUrl.getLeague(), {
      method: 'get'
    })
    .then(res => (res.json()))
    .then( ({leagues}) => {
      return dispatch(setLeagues(leagues))
    })
  }
}


export const setLeagues = leagues => {
  return {
    type: CONST.SET_LEAGUES,
    leagues
  }
}