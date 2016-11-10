import React, { Component } from 'react'
import moment from 'moment'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'



export default class TeamSchdule extends Component {

  constructor(props) {
    super(props)
    this.state = {
      matchId: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.match.matches[0]) return
    this.setState({
      matchId: nextProps.match.matches[0].matchId
    })
  }

  handleChange(e) {
    this.setState({
      matchId: e.target.value
    })
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