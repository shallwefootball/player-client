import { combineReducers } from 'redux'

import league from './league'
import match from './match'
import team from './team'
import club from './club'
import player from './player'

export default combineReducers({
  league,
  match,
  team,
  club,
  player
})