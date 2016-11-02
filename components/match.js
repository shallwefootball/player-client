import React, { Component } from 'react'

import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'

import MatchHeader from './match-header'

export default class Match extends Component {

  render() {
    return (
      <Accordion>
        {
          this.props.match.matches.map(match => {

            return (
              <Panel
                header={<MatchHeader match={match} />}
                eventKey={match.matchId}
                key={match.matchId}
              >
                hihihi
              </Panel>
            )
          })
        }
      </Accordion>
    )
  }
}

