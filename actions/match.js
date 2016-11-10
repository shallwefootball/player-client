import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const leagueUrl = dev.apiUrl + '/league/'
const willMatchUrl = dev.apiUrl + '/will-match/'
const matchUrl = dev.apiUrl + '/match/'

export const getMatches = leagueId => {
  return dispatch => {
    fetch(leagueUrl + leagueId, { method: 'get' })
      .then(res => (res.json())).then(({ matches }) => {
        return dispatch(setMatches(matches))
      })
  }
}

export const getMatch = matchId => {
  return dispatch => {
    return fetch(matchUrl + matchId, { method: 'get' })
      .then(res => (res.json())).then(({ match })  => {
        return dispatch(setMatch(match))
      })
  }
}


const setMatches = matches => {
  return {
    type: CONST.SET_MATCHES,
    matches: matches
  }
}

const setMatch = match => {
  return {
    type: CONST.SET_MATCH,
    match
  }
}

export const getWillMatch = (leagueId, clubId) => {
  return dispatch => {
    fetch(willMatchUrl + leagueId + '/' + clubId, { method: 'get' })
      .then(res => {return res.json()})
      .then(({ matches }) => {
        return dispatch(setMatches(matches))
      })
  }
}