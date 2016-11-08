import CONST from '../constraint'

const initState = {
  teams: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_TEAM: {
      console.log('action : ', action)
      return action.team
    }
    default: return state
  }
}
