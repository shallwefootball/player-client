import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from '../pages/header'

import TeamSchdule from './team-schedule'

class Lineup extends Component {


  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Header />
        <TeamSchdule
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