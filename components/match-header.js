import React from 'react'
import moment from 'moment'

import config from '../config'

const url = config.dev.apiUrl

const flag = () => (<i className="fa fa-flag" aria-hidden="true"></i>)

export default ({
  matchName,
  kickoffTime,
  homeClubName,
  homeImageS,
  awayClubName,
  awayImageS,
  homeScore,
  awayScore,
  note
}) => {

  note = note == '기권' ? flag() : ''
  return (
    <span>
      <span className="text-info">
        {matchName}
      </span>
      {" "}
      <span className="text-muted">
        {moment(kickoffTime).format('M.D')}
      </span>
      {" "}
      {note}
      {" "}
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
  )
}
