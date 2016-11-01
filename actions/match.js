import fetch from 'isomorphic-fetch'

import config from '../config'
import CONST from '../constraint'

const url = config.dev.apiUrl + '/league/'


export const getMatches = leagueId => {

  return dispatch => {

    fetch(url + leagueId, { method: 'get' })
    .then(res => (res.json())).then( ({matches}) => {
      dispatch(setMatches(matches))
    })
  }
}


const setMatches = matches => {
  return {
    type: CONST.SET_MATCHES,
    matches: matches
  }
}