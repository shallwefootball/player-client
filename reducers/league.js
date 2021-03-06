import CONST from '../constraint'

const initState = {
  leagues: [],
  seasons: [],
  ranks: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_LEAGUES: {
      state.leagues = action.leagues
      return { ...state }
    }
    case CONST.SET_LEAGUE_RANK: {
      state.ranks = action.ranks
      return {...state}
    }
    default: return state
  }
}
