import { combineReducers } from 'redux'

import league from './league'
import match from './match'
import team from './team'
import club from './club'
import player from './player'
import record from './record'
import user from './user'

export default combineReducers({
  league,
  match,
  team,
  club,
  player,
  record,
  user
})