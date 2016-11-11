import CONST from '../constraint'

const initState = {
  users: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_USERS: {
      return { users: action.users }
    }
    default: return state
  }
}
