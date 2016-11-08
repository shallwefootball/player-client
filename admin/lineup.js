import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from '../components/header'

import ClubSchdule from './club-schedule'
import Formation from './formation'
import LineupPlayer from './lineup-player'

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

  render() {

    return (
      <div>
        <Header />
        <ClubSchdule
          match={this.props.match}
          club={this.props.club}
        />

        <LineupPlayer />
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