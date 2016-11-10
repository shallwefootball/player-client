import CONST from '../constraint'

const initState = {
  players: [],
  home: [],
  away: []
}


export default (state = initState, action) => {

  switch(action.type) {
    case CONST.SET_PLAYERS: {

      return { players: action.players }
    }
    case CONST.SET_PLAYERS_HOMEAWAY: {

      return action.players
    }
    default: return state
  }
}