import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
import CONST from '../constraint'

export const getPlayers = clubId => {

  return dispatch => {
    fetch(apiUrl.getPlayersClubId({ clubId }), { method: 'get' })
      .then(res => (res.json())).then(({ players }) => {
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
    return fetch(apiUrl.getPlayers(), {
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

export const setPlayerToClub = (userId, leagueId, clubId) => {
  return dispatch => {
    return fetch(apiUrl.getPlayer(), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: userId, leagueId: leagueId, clubId: clubId })
    })
    .then(res => (res.json())).then(({ players }) => {
      return dispatch(setPlayers(players))
    })
  }
}

const getMatchPlayersOfAClub = (matchId, clubId) => {
  return fetch(apiUrl.getPlayersMatchIdClubId({matchId, clubId}), { method: 'get' })
    .then(res => (res.json())).then(({ players }) => {
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
