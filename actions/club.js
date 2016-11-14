import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
import CONST from '../constraint'

export const getClub = clubId => {

  return dispatch => {

    fetch(apiUrl.getClub({ clubId }), { method: 'get' })
    .then(res => (res.json())).then(({ club }) => {
      return dispatch(setClub(club))
    })
  }
}

export const getClubs = leagueId => {

  return dispatch => {

    fetch(apiUrl.getClubs({ leagueId }), { method: 'get' })
    .then(res => (res.json())).then(({ clubs }) => {
      dispatch(setClubs(clubs))
    })
  }
}

export const setClub = club => {
  return {
    type: CONST.SET_CLUB,
    club
  }
}

const setClubs = clubs => {
  return {
    type: CONST.SET_CLUBS,
    clubs
  }
}
