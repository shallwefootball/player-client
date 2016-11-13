import React, { Component } from 'react'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Radio from 'react-bootstrap/lib/Radio'

import RecordPlayer from './record-player'
import RecordModal from './record-modal'

export default class RecordPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recordModalShown: false,
      lineupId: '',
      playerName: '',
      matchPosition: '',
      squadNumber: ''
    }
  }

  handleClickShowModal({lineupId, playerName, matchPosition, squadNumber}) {
    this.setState({
      recordModalShown: true,
      lineupId,
      playerName,
      matchPosition,
      squadNumber
    })
  }
  handleClickClose() { this._close() }

  handleClickRecord({time, minutes, recordName}) {

    const { actions, url } = this.props
    let record = {
      lineupId: this.state.lineupId,
      time,
      minutes,
      recordName
    }

    actions.setRecord(record)
    .then(res => {
      actions.getRecords(url.query.matchId)
    })
    this._close()
  }

  _close() {
    this.setState({
      recordModalShown: false
    })
  }

  render() {

    const { lineupId, playerName, squadNumber, matchPosition } = this.state

    return (
      <div style={{flex: 1}}>
        <ListGroup>
          {
            this.props.players.map((player, i) => {
              const disabled = 10 < i ? true : false
              return (
                <RecordPlayer
                  disabled={disabled}
                  key={player.playerId}
                  player={player}
                  onClickRecord={this.handleClickShowModal.bind(this)}
                />
              )
            })
          }
        </ListGroup>

        <RecordModal
          shown={this.state.recordModalShown}
          lineupId={lineupId}
          squadNumber={squadNumber}
          matchPosition={matchPosition}
          playerName={playerName}
          onClickClose={this.handleClickClose.bind(this)}
          onClickRecord={this.handleClickRecord.bind(this)}
        />

      </div>
    )
  }
}