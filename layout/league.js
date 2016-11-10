import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'
import Header from './header'

import ClubLink from '../admin/club-link'
import Fixture from '../components/fixture'

class LeagueLayout extends Component {

  componentDidMount() {
    const { actions, url } = this.props

    actions.getMatches(url.query.leagueId)
  }
  render() {

    return (
      <div>
        <Header />
        <ClubLink url={this.props.url} />
        <Fixture match={this.props.match} />
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
)(LeagueLayout)
