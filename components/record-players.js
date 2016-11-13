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

export default class RecordPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recordModalShown: false,
      playerName: '',
      matchPosition: '',
      squadNumber: '',
      recordName: '',
      minutes: '',
      time: ''
    }
  }

  handleClickShowModal({lineupId, playerId, playerName, matchPosition, squadNumber}) {
    this.setState({
      recordModalShown: true,
      lineupId,
      playerId,
      playerName,
      matchPosition,
      squadNumber
    })
  }

  handleClickRecord(e) {
    const {lineupId, time, minutes, recordName}
    let record = {
      lineupId,
      time,
      minutes,
      recordName
    }

    console.log('record   : ', record)
    this._close()
  }
  handleHide() {
    this._close()
  }
  handleClickClose() {
    this._close()
  }
  handleChangeMinutes(e) {
    this.setState({
      minutes: e.target.value
    })
  }
  handleChangeTime(e) {
    this.setState({
      time: e.target.value
    })
  }
  handleChangeRecord(e) {
    this.setState({
      recordName: e.target.value
    })
  }

  _close() {
    this.setState({
      recordModalShown: false
    })
  }

  render() {

    const { playerName, squadNumber, matchPosition } = this.state

    return (
      <div style={{flex: 1}}>
        <ListGroup>
          {
            this.props.players.map(player => {
              return (
                <RecordPlayer
                  key={player.playerId}
                  player={player}
                  onClickRecord={this.handleClickShowModal.bind(this)}
                />
              )
            })
          }
        </ListGroup>

        <Modal show={this.state.recordModalShown} onHide={this.handleHide.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{squadNumber} {matchPosition} - {playerName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formBasicText">
              <ControlLabel>시간</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter minutes"
                onChange={this.handleChangeMinutes.bind(this)}
              />
            </FormGroup>

            <FormGroup
              onChange={this.handleChangeTime.bind(this)}
            >
              <Radio name="time" inline value="firstHalf">전반</Radio>
              {' '}
              <Radio name="time" inline value="halfTime">하프타임</Radio>
              {' '}
              <Radio name="time" inline value="secondHalf">후반</Radio>
            </FormGroup>

            <FormGroup
              onChange={this.handleChangeRecord.bind(this)}
            >
              <Radio name="record" value="goalScored">득점</Radio>
              {' '}
              <Radio name="record" value="ownGoal">자책골</Radio>
              {' '}
              <Radio name="record" value="penaltyScored">패널티골</Radio>
              {' '}
              <Radio name="record" value="penaltyMissed">패널티실축</Radio>
              {' '}
              <Radio name="record" value="redCard">레드카드</Radio>
              {' '}
              <Radio name="record" value="yellowCard">옐로카드</Radio>
              {' '}
              <Radio name="record" value="secondYellowCard">Y2카드</Radio>
            </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClickClose.bind(this)}>Close</Button>
            <Button onClick={this.handleClickRecord.bind(this)}>Record</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}