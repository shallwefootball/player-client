import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from '../components/header'

import ClubSchdule from './club-schedule'
import Formation from './formation'

class Lineup extends Component {


  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { actions, url } = this.props
    const { clubId } = this.props.url.query
    actions.getWillMatch(clubId)
    actions.getTeam(clubId)
  }

  render() {

    return (
      <div>
        <Header />
        <ClubSchdule
          match={this.props.match}
          team={this.props.team}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, ownState) => {

  const { match, team } = state
  return { match, team }
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