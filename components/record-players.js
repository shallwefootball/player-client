import React, { Component } from 'react'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

export default class RecordPlayers extends Component {
  render() {
    return (
      <div style={{flex: 1}}>
        <ListGroup>
          {
            this.props.players.map(player => {
              return (
                <ListGroupItem key={player.playerId}>
                  {player.matchPosition} {player.squadNumber} - {player.playerName}
                  {" "}
                  <Button bsStyle="default" bsSize="xsmall">기록</Button>
                  {" "}
                  <Button bsStyle="default" bsSize="xsmall">교체</Button>
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </div>
    )
  }
}