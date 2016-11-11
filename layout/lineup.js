import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from './header'

import ClubSchdule from '../admin/club-schedule'
import LineupPlayers from '../admin/lineup-players'
import SubCounts from '../admin/sub-counts'
import FormationSelect from '../admin/formation-select'

import UserSearch from '../components/user-search'

class LineupLayout extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { actions, url } = this.props
    const { clubId, leagueId } = this.props.url.query
    actions.getWillMatch(leagueId, clubId)
    actions.getClub(clubId)
    actions.getPlayers(clubId)
  }

  handleChangeSub(subCount) {

    const { players } = this.props.player

    this.props.actions.setPlayers(this._getReArrangedStatusPlayers(players, subCount))
  }

  handleChangeFormation(formation) {

    const { actions, club, player } = this.props

    let players = this._reArrangedPositionPlayers(player.players, formation)
    players = this._getReArrangedStatusPlayers(players, this._getSubCount(players))

    club.formation = formation
    actions.setClub(club)
    actions.setPlayers(players)
  }

  handleDropPlayer() {

    const { actions, club, player } = this.props

    let players = this._reArrangedPositionPlayers(player.players, club.formation)
    players = this._getReArrangedStatusPlayers(players, this._getSubCount(players))
    this.props.actions.setPlayers(players)
  }

  handleAddUser(userId) {

    const { clubId, leagueId } = this.props.url.query

    this.props.actions.setPlayerToClub(userId, leagueId, clubId)
  }

  handleClickSave() {
    const { player, actions, club} = this.props

    actions.updatePlayers(club.clubId, player.players)
      .then(res => {
        if(res.message == 'success') alert('save success')
      })
  }

  handleClickSubmit() {
    const { player, actions } = this.props
    let { players } = player

    players = players.filter(player => (player.status != 'excepted'))

    actions.insertLineup(this.refs.clubSchdule.state.matchId, players)
      .then(res => {
        if(res.message == 'success') alert('submit success')
      })
  }

  _reArrangedPositionPlayers(players, formation) {

    const formationCount = formation.split('-')
    const dfCount = Number.parseInt(formationCount[0])
    const mfCount = Number.parseInt(formationCount[1])
    const fwCount = Number.parseInt(formationCount[2])

    const gk = players.splice(0, 1).map(player => {player.matchPosition = 'GK'; return player})
    const df = players.splice(0, dfCount).map(player => {player.matchPosition = 'DF'; return player})
    const mf = players.splice(0, mfCount).map(player => {player.matchPosition = 'MF'; return player})
    const fw = players.splice(0, fwCount).map(player => {player.matchPosition = 'FW'; return player})

    return [...gk, ...df, ...mf, ...fw, ...players]
  }

  _getReArrangedStatusPlayers(players, subCount) {

    const starting = players.splice(0, 11).map(player => {
      player.status = 'starting'
      return player
    })
    const sub = players.splice(0, subCount).map(player => {
      player.status = 'sub'
      return player
    })
    const excepted = players.map(player => {
      player.status = 'excepted'
      return player
    })

    return [...starting, ...sub, ...excepted]
  }

  _getSubCount(players) {
    return players.filter(player => (player.status == 'sub')).length
  }

  render() {

    const { match, club, player, user, actions } = this.props
    const subCount = this._getSubCount(player.players)

    return (
      <div>
        <Header />
        <ClubSchdule
          match={match}
          club={club}
          ref="clubSchdule"
        />

        <FormationSelect
          onChangeFormation={this.handleChangeFormation.bind(this)}
          formation={club.formation}
        />

        <SubCounts
          subCount={subCount}
          onChangeSubCount={this.handleChangeSub.bind(this)}
        />

        <UserSearch
          actions={actions}
          user={user}
          onAddUser={this.handleAddUser.bind(this)}
        />

        <Button onClick={this.handleClickSave.bind(this)}>save</Button>
        <Button onClick={this.handleClickSubmit.bind(this)}>제출</Button>

        <LineupPlayers
          player={player}
          actions={actions}
          subCount={subCount}
          onDropPlayer={this.handleDropPlayer.bind(this)}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownState) => {

  const { match, club, player, user } = state
  return { match, club, player, user }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LineupLayout)