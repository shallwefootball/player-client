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
  handleClickClose() {
    this._close()
  }

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
        // <Modal show={this.state.recordModalShown} onHide={this.handleHide.bind(this)}>
        //   <Modal.Header closeButton>
        //     <Modal.Title>{squadNumber} {matchPosition} - {playerName}</Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body>
        //     <FormGroup controlId="formBasicText">
        //       <ControlLabel>시간</ControlLabel>
        //       <FormControl
        //         type="text"
        //         placeholder="Enter minutes"
        //         onChange={this.handleChangeMinutes.bind(this)}
        //       />
        //     </FormGroup>

        //     <FormGroup
        //       onChange={this.handleChangeTime.bind(this)}
        //     >
        //       <Radio name="time" inline value="firstHalf">전반</Radio>
        //       {' '}
        //       <Radio name="time" inline value="halfTime">하프타임</Radio>
        //       {' '}
        //       <Radio name="time" inline value="secondHalf">후반</Radio>
        //     </FormGroup>

        //     <FormGroup
        //       onChange={this.handleChangeRecord.bind(this)}
        //     >
        //       <Radio name="record" value="goalScored">득점</Radio>
        //       {' '}
        //       <Radio name="record" value="ownGoal">자책골</Radio>
        //       {' '}
        //       <Radio name="record" value="penaltyScored">패널티골</Radio>
        //       {' '}
        //       <Radio name="record" value="penaltyMissed">패널티실축</Radio>
        //       {' '}
        //       <Radio name="record" value="redCard">레드카드</Radio>
        //       {' '}
        //       <Radio name="record" value="yellowCard">옐로카드</Radio>
        //       {' '}
        //       <Radio name="record" value="secondYellowCard">Y2카드</Radio>
        //     </FormGroup>

        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button onClick={this.handleClickClose.bind(this)}>Close</Button>
        //     <Button onClick={this.handleClickRecord.bind(this)}>Record</Button>
        //   </Modal.Footer>
        // </Modal>