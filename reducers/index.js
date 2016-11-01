import { combineReducers } from 'redux'

import league from './league'
import match from './match'

export default combineReducers({
  league,
  match
})