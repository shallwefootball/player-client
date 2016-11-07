import fetch from 'isomorphic-fetch'

import config from '../config'
import CONST from '../constraint'

const url = config.dev.apiUrl + '/league'

export const getLeagues = () => {

  return dispatch => {

    fetch(url, {
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