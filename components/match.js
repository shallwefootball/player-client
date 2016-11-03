import React, { Component } from 'react'

import Accordion from 'react-bootstrap/lib/Accordion'
import PanelGroup from 'react-bootstrap/lib/PanelGroup'
import Panel from 'react-bootstrap/lib/Panel'

import MatchHeader from './match-header'

export default class Match extends Component {

  constructor() {
    super()

    this.state = {
      activeKey: null
    }
  }

  handleSelect() {
    console.log('onSelect')
  }

  handleClickHeader(activeKey) {
    this.setState({ activeKey: activeKey })
  }

  render() {
    return (

      <PanelGroup
        accordion
        activeKey={this.state.activeKey}
        onSelect={this.handleSelect.bind(this)}
      >

        {
          this.props.match.matches.map(match => {

            return (
              <Panel
                header={
                  <MatchHeader
                    match={match}
                    onClick={this.handleClickHeader.bind(this)}
                  />
                }
                eventKey={match.matchId}
                key={match.matchId}
                collapsible
              >
                hihihi
              </Panel>
            )
          })
        }
      </PanelGroup>
    )
  }
}
