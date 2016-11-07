import CONST from '../constraint'

const initState = {
  leagues: [],
  seasons: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_LEAGUES: {
      const { leagues } = action
      return { leagues}
    }
    default: return state
  }
}
