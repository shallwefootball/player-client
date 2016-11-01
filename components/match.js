import React, { Component } from 'react'
import moment from 'moment'
import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'

export default class Match extends Component {

  render() {
    return (
      <Accordion>
        {
          this.props.match.matches.map(match => {

            const {
              matchName,
              kickoffTime,
              homeClubName,
              awayClubName,
              homeScore,
              awayScore
            } = match
            return (
              <Panel
                header={
                  <span>
                    <span className="text-info">
                      {matchName}
                    </span>
                    {" "}
                    <span className="text-muted">
                      {moment(kickoffTime).format('M.D')}
                    </span>
                    {" "}
                    {homeClubName}
                    {" "}
                    {homeScore} : {awayScore}
                    {" "}
                    {awayClubName}
                  </span>
                }
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