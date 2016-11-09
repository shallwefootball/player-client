import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const clubsUrl = dev.apiUrl + '/clubs/'
const clubUrl = dev.apiUrl + '/club/'

export const getClub = clubId => {

  return dispatch => {

    fetch(clubUrl + clubId, { method: 'get' })
    .then(res => (res.json())).then(({ club }) => {
      return dispatch(setClub(club))
    })
  }
}

export const getClubs = leagueId => {

  return dispatch => {

    fetch(clubsUrl + leagueId, { method: 'get' })
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
