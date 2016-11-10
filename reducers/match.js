import CONST from '../constraint'

export default (state = { matches: [] }, action) => {

  switch(action.type) {

    case CONST.SET_MATCH: {

      return action.match
    }
    case CONST.SET_MATCHES: {

      return {matches: action.matches}
    }
    default: return state
  }
}