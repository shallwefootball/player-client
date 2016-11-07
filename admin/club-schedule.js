import React, { Component } from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

export default class TeamSchdule extends Component {

  handleChange(e) {
    console.log('select', e.target.value)
  }

  render() {

    const { team, match } = this.props

    return (
      <div>
        <h4>{team.teamName} 팀의 진행해야할 경기.</h4>
        <FormGroup>
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
                    {match.homeClubName}vs{match.awayClubName}
                  </option>
                )
              })
            }
          </FormControl>
        </FormGroup>
      </div>
    )
  }
}