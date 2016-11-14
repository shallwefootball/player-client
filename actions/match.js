import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
import CONST from '../constraint'

export const getMatches = leagueId => {
  return dispatch => {
    fetch(apiUrl.getMatches({ leagueId }), { method: 'get' })
      .then(res => (res.json())).then(({ matches }) => {
        return dispatch(setMatches(matches))
      })
  }
}

export const getMatch = matchId => {
  return dispatch => {
    return fetch(apiUrl.getMatch({ matchId }), { method: 'get' })
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
    fetch(apiUrl.getWillMatch({ leagueId, clubId }), { method: 'get' })
      .then(res => {return res.json()})
      .then(({ matches }) => {
        return dispatch(setMatches(matches))
      })
  }
}