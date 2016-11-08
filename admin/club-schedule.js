import React, { Component } from 'react'
import moment from 'moment'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'



export default class TeamSchdule extends Component {

  handleChange(e) {
    console.log('select', e.target.value)
  }

  render() {

    const { club, match } = this.props

    return (
      <FormGroup>
        <ControlLabel>{club.teamName} 팀의 진행해야할 경기.</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select"
          onChange={this.handleChange.bind(this)}
        >
          {
            match.matches.map(match => {
              return (
                <option
                  value={match.matchId}
                  key={match.matchId}
                >
                  {moment(match.kickoffTime).format('M.D')} - {match.homeClubName}vs{match.awayClubName}
                </option>
              )
            })
          }
        </FormControl>
      </FormGroup>
    )
  }
}