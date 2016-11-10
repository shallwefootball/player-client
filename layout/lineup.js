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

    this._arangeFormation(formation)

    club.formation = formation
    actions.setClub(club)
  }

  handleDropPlayer() {
    this._arangeFormation(this.props.club.formation)
  }

  _arangeFormation(formation) {

    const { players } = this.props.player

    let formationCount = formation.split('-')
    const dfCount = Number.parseInt(formationCount[0])
    const mfCount = dfCount + Number.parseInt(formationCount[1])
    const fwCount = mfCount + Number.parseInt(formationCount[2])

    players[0].matchPosition = 'GK'
    let i = 1
    while(i < 11) {
      if (i <= dfCount) players[i].matchPosition = 'DF'
      if (dfCount < i && i <= mfCount) players[i].matchPosition = 'MF'
      if (mfCount < i) players[i].matchPosition = 'FW'
      i++
    }

    this.props.actions.setPlayers(players)
  }

  render() {

    const { match, club, player, actions } = this.props

    const subPlayer = player.players.filter(player => (player.status == 'sub'))

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
          subCount={subPlayer.length}
          onChangeSubCount={this.handleChangeSub.bind(this)}
        />

        <LineupPlayers
          player={player}
          actions={actions}
          subCount={subPlayer.length}
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