import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'
import Header from './header'

import ClubLink from '../admin/club-link'
import Scoreboard from '../components/scoreboard'
import RecordPlayers from '../components/record-players'
import Records from '../components/records'

class RecordLayout extends Component {

  componentDidMount() {

    const { actions, url } = this.props

    actions.getMatch(url.query.matchId)
      .then(({ match }) => {
        actions.getHomeAwayPlayers(match.matchId, match.homeClubId, match.awayClubId)
        actions.getRecords(match.matchId)
      })
  }
  render() {
    console.log('this.props.match  : ', this.props)
    return (
      <div>
        <Header />
        <Scoreboard match={this.props.match}/>
        <div style={{display: 'flex'}}>
          <RecordPlayers
            players={this.props.player.home}
          />
          <Records records={this.props.record.records} />
          <RecordPlayers
            players={this.props.player.away}
          />
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state, ownState) => {

  const { match, club, player, record } = state
  return { match, club, player, record }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordLayout)
