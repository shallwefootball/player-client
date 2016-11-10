import CONST from '../constraint'

const initState = {
  records: []
}

export default (state = initState, action) => {

  switch(action.type) {

    case CONST.SET_RECORDS: {
      return {records: action.records}
    }
    default: return state
  }
}
