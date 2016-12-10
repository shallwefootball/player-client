import React, { Component } from 'react'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Radio from 'react-bootstrap/lib/Radio'
import Panel from 'react-bootstrap/lib/Panel'

import RecordPlayer from './record-player'
import RecordModal from './record-modal'

export default class RecordPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recordModalShown: false,
      subMode: false,
      lineupId: '',
      playerName: '',
      matchPosition: '',
      squadNumber: ''
    }
  }

  handleClickShowModal({lineupId, playerName, matchPosition, squadNumber}, { subMode }) {
    this.setState({
      recordModalShown: true,
      subMode,
      lineupId,
      playerName,
      matchPosition,
      squadNumber
    })
  }
  handleClickClose() { this._close() }

  handleClickRecord(record) {

    const { actions, url } = this.props

    record.lineupId = this.state.lineupId

    actions.setRecord(record)
    .then(res => {
      actions.getRecords(url.query.matchId)
      actions.getMatch(url.query.matchId)
    })
    this._close()
  }

  _close() {
    this.setState({
      recordModalShown: false
    })
  }

  _renderFooter(sub) {
    return sub.map(player => {
      const subed = !player.subed
      return (
        <RecordPlayer
          subed={subed}
          key={player.playerId}
          player={player}
          onClickRecord={this.handleClickShowModal.bind(this)}
        />
      )
    })
  }

  render() {

    const { lineupId, playerName, squadNumber, matchPosition, subMode } = this.state
    const { players } = this.props

    const starting = players.slice(0, 11)
    const sub = players.slice(11, players.length)

    return (
      <div style={{flex: 1}}>
        <Panel footer={this._renderFooter(sub)}>
          <ListGroup>
            {
              starting.map(player => {

                return (
                  <RecordPlayer
                    subed={player.subed}
                    key={player.playerId}
                    player={player}
                    onClickRecord={this.handleClickShowModal.bind(this)}
                  />
                )
              })
            }
          </ListGroup>
        </Panel>

        <RecordModal
          shown={this.state.recordModalShown}
          lineupId={lineupId}
          squadNumber={squadNumber}
          matchPosition={matchPosition}
          playerName={playerName}
          subMode={subMode}
          subPlayers={sub}
          onClickClose={this.handleClickClose.bind(this)}
          onClickRecord={this.handleClickRecord.bind(this)}
        />

      </div>
    )
  }
}