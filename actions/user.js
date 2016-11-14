import fetch from 'isomorphic-fetch'

import { apiUrl } from '../config'
import CONST from '../constraint'

export const getUsersChar = char => {

  return dispatch => {

    fetch(apiUrl.getUers({ char }), { method: 'get' })
      .then(res => (res.json())).then( ({users}) => {
        return dispatch(setUsers(users))
      })
  }
}


const setUsers = users => {
  return {
    type: CONST.SET_USERS,
    users
  }
}