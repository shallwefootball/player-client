import React, { Component } from 'react'
import moment from 'moment'
import radium from 'radium'
import Button from 'react-bootstrap/lib/Button'

import config from '../config'

const url = config.dev.apiUrl

class MatchHeader extends Component {

  handleClickHeader() {

    this.props.onClick(this.props.match.matchId)
  }

  _renderWithdrawFlag(note) {

    return note == '기권' ? <i className="fa fa-flag" aria-hidden="true"></i> : ''
  }

  render() {
    let {
      matchName,
      kickoffTime,
      homeClubName,
      homeImageS,
      awayClubName,
      awayImageS,
      homeScore,
      awayScore,
      note
    } = this.props.match

    return (
      <span
        style={{
          ':hover': {
            textDecoration: 'none',
            cursor: 'pointer'
          }
        }}
        onClick={this.handleClickHeader.bind(this)}
      >
        <span className="text-info">
          {matchName}
        </span>
        {" "}
        <span className="text-muted">
          {moment(kickoffTime).format('M.D')}
        </span>
        {" "}
        {this._renderWithdrawFlag(note)}
        <span style={{padding: '0 9px'}}>
          <img
            src={url + '/' + (homeImageS || 'default.png') }
            style={{marginBottom: 2}}
            data-rjs="3"
          />
          {" "}
          {homeClubName}
          {" "}
          {homeScore} : {awayScore}
          {" "}
          {awayClubName}
          {" "}
          <img
            src={url + '/' + (awayImageS || 'default.png')}
            style={{marginBottom: 2}}
            data-rjs="3"
          />
        </span>

        <Button bsStyle="default" bsSize="xsmall">
          참가
        </Button>

      </span>
    )
  }
}


export default radium(MatchHeader)