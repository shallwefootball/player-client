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

export const getLeagueRank = leagueId => {
  return dispatch => {

    return fetch(apiUrl.getLeagueRank({ leagueId }), {
      method: 'get'
    })
    .then(res => (res.json()))
    .then( ({ranks}) => {

      return dispatch(setLeagueRank(ranks))
    })
  }
}


export const setLeagues = leagues => {
  return {
    type: CONST.SET_LEAGUES,
    leagues
  }
}

const setLeagueRank = ranks => {
  return {
    type: CONST.SET_LEAGUE_RANK,
    ranks
  }
}