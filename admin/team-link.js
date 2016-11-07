import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from '../pages/header'

class SubmitPlayer extends Component {


  constructor(props) {
    super(props)
    console.log("props  : ", props)
  }

  render() {

    return (
      <div>
        <Header />
        {
          this.props.team.teams.map(team => {
            return (
              <div key={team.teamId}>
                <Button
                  href={'/lineup?teamId=' + team.teamId}
                >
                  {team.teamName}
                </Button>
              </div>
            )
          })
        }
      </div>
    )
  }
}


const mapStateToProps = (state, ownState) => {

  const { team } = state
  return { team }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitPlayer)