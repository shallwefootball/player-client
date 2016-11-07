import React, { Component } from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

export default class Formation extends Component {
  render() {
    return (
      <FormGroup controlId="formControlsSelect">
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
    )
  }
}