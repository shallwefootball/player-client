import CONST from '../constraint'

const initState = {
  teams: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_TEAM: {
      return action.team
    }
    default: return state
  }
}
