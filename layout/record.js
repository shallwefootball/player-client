import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'
import Header from './header'

import ClubLink from '../admin/club-link'
import Scoreboard from '../components/scoreboard'

class RecordLayout extends Component {

  componentDidMount() {
    const { actions, url } = this.props

    actions.getMatch(url.query.matchId)
  }
  render() {
    return (
      <div>
        <Header />
        <Scoreboard match={this.props.match}/>
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
)(RecordLayout)
