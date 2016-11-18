import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'
import Header from './header'

import ClubLink from '../admin/club-link'
import Fixture from '../components/fixture'
import LeagueRank from '../components/league-rank'

class LeagueLayout extends Component {

  componentDidMount() {
    const { actions, url } = this.props

    actions.getMatches(url.query.leagueId)
    actions.getLeagueRank(url.query.leagueId)
  }
  render() {

    return (
      <div>
        <Header />
        <ClubLink url={this.props.url} />
        <LeagueRank ranks={this.props.league.ranks} />
        <Fixture match={this.props.match} />
      </div>
    )
  }
}



const mapStateToProps = (state, ownState) => {

  const { match, club, player, league } = state
  return { match, club, player, league }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueLayout)
