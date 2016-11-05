import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import config from '../config'
import actions from '../actions'

import Header from './header'

import SeasonLink from '../components/season-link'
import Fixture from '../components/fixture'


class League extends Component {
  constructor(props) {
    super(props)

    const seasonString = props.league.leagues[0].season
    const { leagueId } = this._getActiveLeague(seasonString)

    props.actions.getMatches(leagueId)

    this.state = {
      activeSeason: seasonString
    }
  }

  handleChangeSeason(seasonString) {
    const { leagueId } = this._getActiveLeague(seasonString)
    this.props.actions.getMatches(leagueId)
    this.setState({
      activeSeason: seasonString
    })
  }

  _getActiveLeague(seasonString) {
    return this.props.league.leagues.filter(league => {
      return league.season == seasonString ? true : false
    })[0]
  }

  render() {
    const seasons = this.props.league.leagues.map(league => (league.season))
    const { activeSeason } = this.state
    return (
      <div>
        <Header />
        <SeasonLink
          seasons={seasons}
          activeSeason={activeSeason}
          onChange={this.handleChangeSeason.bind(this)}
        />

        <Fixture
          match={this.props.match}
        />
        <script src="https://use.fontawesome.com/a8eaded6f6.js"></script>
      </div>
    )
  }
}

const mapStateToProps = (state, ownState) => {

  const { league, match } = state
  return { league, match }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(League)