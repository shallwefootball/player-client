import CONST from '../constraint'

export default (state = { players: [] }, action) => {

  switch(action.type) {
    case CONST.SET_PLAYERS: {
      return {players: action.players}
    }
    default: return state
  }
}