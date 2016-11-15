import React, { Component } from 'react'
import moment from 'moment'

import Panel from 'react-bootstrap/lib/Panel'

const clubStyle = {
  flex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default class Scoreboard extends Component {
  render() {

    const {
      homeClubName,
      awayClubName,
      homeScore,
      awayScore,
      kickoffTime
    } = this.props.match

    const { homeGoal, awayGoal } = this.props

    return (
      <Panel>
        <div style={{display: 'flex'}}>
          <div style={clubStyle}>
            <p>{homeClubName}</p>
          </div>

          <div style={{ textAlign: 'center', flex: 1 }}>
            <p>{moment(kickoffTime).format('YYYY-MM-DD HH:mm')}</p>
            <p>{(homeScore != null && awayScore != null) ? homeScore + ' : ' + awayScore : 'vs'}</p>
            <div style={{display: 'flex'}}>
              <div style={{flex: 1, marginRight: '0.8rem'}}>
                {
                  homeGoal.map(goal => {
                    return <p key={goal.recordId}>{goal.playerName} - {goal.minutes}'</p>
                  })
                }
              </div>
              <div style={{ flex: 1, marginLeft: '0.8rem' }}>
                {
                  awayGoal.map(goal => {
                    return <p key={goal.recordId}>{goal.playerName} - {goal.minutes}'</p>
                  })
                }
              </div>
            </div>
          </div>

          <div style={clubStyle}>
            <p>{awayClubName}</p>
          </div>
        </div>
      </Panel>
    )
  }
}