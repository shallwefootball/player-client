import React, { Component } from 'react'
import moment from 'moment'
import Button from 'react-bootstrap/lib/Button'

import style from 'next/css'

import config from '../config'

const url = config.dev.apiUrl

const hoverStyle = style({
  ':hover': {
    textDecoration: 'none',
    cursor: 'pointer'
  }
})

export default class MatchHeader extends Component {

  handleClickHeader() {
    this.props.onClick(this.props.match.matchId)
  }

  handleClickAdd(e) {
    e.stopPropagation()
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
        className={hoverStyle}
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

        <Button
          bsStyle="default"
          bsSize="xsmall"
          onClick={this.handleClickAdd.bind(this)}
        >
          참가
        </Button>

      </span>
    )
  }
}
