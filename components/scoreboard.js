import React, { Component } from 'react'

import Panel from 'react-bootstrap/lib/Panel'

export default class Scoreboard extends Component {
  render() {

    const {
      homeClubName,
      awayClubName
    } = this.props.match

    return (
      <Panel>
        <div style={{display: 'flex'}}>
          <div
            style={{
              textAlign: 'center',
              flex: 2
            }}
          >
            {this.props.match.homeClubName}
          </div>

          <div
            style={{
              textAlign: 'center',
              flex: 1
            }}
          >
            vs
          </div>

          <div
            style={{
              textAlign: 'center',
              flex: 2
            }}
          >
            {awayClubName}
          </div>
        </div>
      </Panel>
    )
  }
}