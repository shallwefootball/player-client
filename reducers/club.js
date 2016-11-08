import CONST from '../constraint'

const initState = {
  clubs: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_CLUB: {
      return action.club
    }
    case CONST.SET_CLUBS: {
      return { clubs: action.clubs }
    }

    default: return state
  }
}
