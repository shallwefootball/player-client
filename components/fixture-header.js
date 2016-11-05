import React, { Component } from 'react'
import moment from 'moment'
import Link from 'next/link'
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
    console.log('click~~`')
  }

  _renderWithdrawFlag(note) {

    return note == '기권' ? <i className="fa fa-flag" aria-hidden="true"></i> : ''
  }
  _renderWithdrawLink(friendlyMatchId, matchId) {

    return friendlyMatchId ? <Button bsStyle="link"><Link href={'/match?matchId=' + matchId}>대체경기</Link></Button> : ''
  }

  render() {
    let {
      matchId,
      matchName,
      kickoffTime,
      homeClubName,
      homeImageS,
      awayClubName,
      awayImageS,
      homeScore,
      awayScore,
      note,
      friendlyMatchId
    } = this.props.match

    console.log('friendlyMatchId  : ', friendlyMatchId)

    return (

      <span>
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


        </span>

        <Button
          bsStyle="default"
          bsSize="xsmall"
          onClick={this.handleClickAdd.bind(this)}
        >
          참가
        </Button>

        {this._renderWithdrawLink(friendlyMatchId, matchId)}
      </span>
    )
  }
}
