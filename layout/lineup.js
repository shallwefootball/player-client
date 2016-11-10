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

class LineupLayout extends Component {


  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { actions, url } = this.props
    const { clubId } = this.props.url.query
    actions.getWillMatch(clubId)
    actions.getClub(clubId)
    actions.getPlayers(clubId)
  }

  handleChangeSub(sub) {


    const { players } = this.props.player

    for (let i = 11; i < players.length; i++) {
      players[i].status = 'excepted'
    }

    for (let i = 0; i < sub; i++) {
      players[11 + i].status = 'sub'
    }

    this.props.actions.setPlayers(players)
  }

  handleChangeFormation(formation) {

    const { actions, club } = this.props

    this._arrangeFormation(formation, this._getSubCount())

    club.formation = formation
    actions.setClub(club)
  }

  handleDropPlayer() {
    this._arrangeFormation(this.props.club.formation, this._getSubCount())
  }

  handleClickSave() {
    const { player, actions, club} = this.props
    actions.updatePlayers(club.clubId, player.players)
    .then(res => {
      if(res.message == 'success') alert('save success')
    })
  }

  _arrangeFormation(formation, subCount) {

    let { players } = this.props.player

    let formationCount = formation.split('-')
    const dfCount = Number.parseInt(formationCount[0])
    const mfCount = Number.parseInt(formationCount[1])
    const fwCount = Number.parseInt(formationCount[2])

    players = players.map((player, i) => {
      if(i < 11) player.status = 'starting'
      if(10 < i && i < (11 + subCount)) player.status = 'sub'
      if((11 + subCount) < i) player.status = 'excepted'
      return player
    })

    let gkArr = players.splice(0, 1).map(player => {player.matchPosition = 'GK'; return player})
    let dfArr = players.splice(0, dfCount).map(player => {player.matchPosition = 'DF'; return player})
    let mfArr = players.splice(0, mfCount).map(player => {player.matchPosition = 'MF'; return player})
    let fwArr = players.splice(0, fwCount).map(player => {player.matchPosition = 'FW'; return player})

    players = gkArr.concat(dfArr, mfArr, fwArr, players)

    this.props.actions.setPlayers(players)
  }

  _getSubCount() {
    return this.props.player.players.filter(player => (player.status == 'sub')).length
  }

  render() {

    const { match, club, player, actions } = this.props

    const subCount = this._getSubCount()

    return (
      <div>
        <Header />
        <ClubSchdule
          match={match}
          club={club}
        />

        <FormationSelect
          onChangeFormation={this.handleChangeFormation.bind(this)}
          formation={club.formation}
        />

        <SubCounts
          subCount={subCount}
          onChangeSubCount={this.handleChangeSub.bind(this)}
        />

        <Button onClick={this.handleClickSave.bind(this)}>save</Button>
        <Button> 제출 </Button>

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

  const { match, club, player } = state
  return { match, club, player }
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