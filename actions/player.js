import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const url = dev.apiUrl + '/players/'


export const getPlayers = clubId => {

  return dispatch => {
    fetch(url + clubId, { method: 'get' })
      .then(res => (res.json())).then( ({players}) => {
        return dispatch(setPlayers(players))
      })
  }
}

export const getHomeAwayPlayers = (matchId, homeClubId, awayClubId) => {
  return dispatch => {
    Promise.all([
      getMatchPlayersOfAClub(matchId, homeClubId),
      getMatchPlayersOfAClub(matchId, awayClubId)
    ])
    .then(values => {
      return dispatch(setHomeAway({home: values[0], away: values[1]}))
    })
  }
}

export const updatePlayers = (clubId, players) => {
  return dispatch => {
    return fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({clubId: clubId, players: players})
    })
    .then(res => (res.json())).then( resJson => {
      return resJson
    })
  }
}

const getMatchPlayersOfAClub = (matchId, clubId) => {
  return fetch(url + matchId + '/' + clubId, { method: 'get' })
    .then(res => (res.json())).then( ({players}) => {
      return players
    })
}


export const setPlayers = players => {
  return {
    type: CONST.SET_PLAYERS,
    players
  }
}

const setHomeAway = players => {
  return {
    type: CONST.SET_PLAYERS_HOMEAWAY,
    players
  }
}
