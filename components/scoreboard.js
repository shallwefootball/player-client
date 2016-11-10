import React, { Component } from 'react'

import Panel from 'react-bootstrap/lib/Panel'

export default class Scoreboard extends Component {
  render() {
    return (
      <Panel>
        <div style={{display: 'flex'}}>
          <div
            style={{
              backgroundColor: 'red',
              textAlign: 'center',
              flex: 2
            }}
          >
            Home
          </div>

          <div
            style={{
              backgroundColor: 'green',
              textAlign: 'center',
              flex: 1
            }}
          >
            Score
          </div>

          <div
            style={{
              backgroundColor: 'yellow',
              textAlign: 'center',
              flex: 2
            }}
          >
            Away
          </div>
        </div>
      </Panel>
    )
  }
}