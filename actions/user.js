import fetch from 'isomorphic-fetch'

import { dev } from '../config'
import CONST from '../constraint'

const url = dev.apiUrl + '/users/'


export const getUsersChar = char => {

  return dispatch => {

    fetch(url + char, { method: 'get' })
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