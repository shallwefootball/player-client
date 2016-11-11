import * as leagueAction from './league'
import * as matchAction from './match'
import * as clubAction from './club'
import * as teamAction from './team'
import * as playerAction from './player'
import * as recordAction from './record'
import * as lineupAction from './lineup'
import * as userAction from './user'

export default Object.assign(
  {},
  leagueAction,
  matchAction,
  clubAction,
  teamAction,
  playerAction,
  recordAction,
  lineupAction,
  userAction
)