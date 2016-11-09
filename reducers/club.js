import CONST from '../constraint'

const initState = {
  clubs: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_CLUB: {
      const club = action.club
      club.clubs = state.clubs
      return club
    }
    case CONST.SET_CLUBS: {
      return { clubs: action.clubs }
    }

    default: return state
  }
}
