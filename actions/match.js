import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const url = dev.apiUrl + '/league/'
const willMatchUrl = dev.apiUrl + '/will-match/'

export const getMatches = leagueId => {

  return dispatch => {

    fetch(url + leagueId, { method: 'get' })
      .then(res => (res.json())).then( ({matches}) => {
        return dispatch(setMatches(matches))
      })
  }
}


const setMatches = matches => {
  return {
    type: CONST.SET_MATCHES,
    matches: matches
  }
}

export const getWillMatch = clubId => {
  return dispatch => {
    fetch(willMatchUrl + clubId, { method: 'get' })
      .then(res => {return res.json()})
      .then(({ matches }) => {
        return dispatch(setMatches(matches))
      })
  }
}