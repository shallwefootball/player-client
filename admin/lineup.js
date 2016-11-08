import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from '../components/header'

import ClubSchdule from './club-schedule'
import Formation from './formation'
import LineupPlayers from './lineup-players'
import SubCounts from './sub-counts'


class Lineup extends Component {


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

        <SubCounts
          subCount={subPlayer.length}
          onChangeSubCount={this.handleChangeSub.bind(this)}
        />

        <LineupPlayers
          player={player}
          actions={actions}
          subCount={subPlayer.length}
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
)(Lineup)