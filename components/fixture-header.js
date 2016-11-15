import React, { Component } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Button from 'react-bootstrap/lib/Button'
import RetinaImage from 'react-retina-image'

import style from 'next/css'

import { dev } from '../config'

const url = dev.host

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
            <RetinaImage
              src={url + '/' + (homeImageS || 'default.png') }
              style={{marginBottom: 2}}
            />
            {" "}
            {homeClubName}
            {" "}
            {homeScore} : {awayScore}
            {" "}
            {awayClubName}
            {" "}
            <RetinaImage
              src={url + '/' + (awayImageS || 'default.png')}
              style={{marginBottom: 2}}
            />
          </span>


        </span>

        <Button bsStyle="link" bsSize="xsmall">
          <Link href={'/record?matchId=' + matchId}>
            기록
          </Link>
        </Button>

        {this._renderWithdrawLink(friendlyMatchId, matchId)}
      </span>
    )
  }
}
