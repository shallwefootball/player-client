import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

import LineupPlayer from './lineup-player'

class LineupPlayers extends Component {
  render() {
    return (
      <ListGroup>
        {
          this.props.player.players.map(player => {
            return (
              <LineupPlayer
                key={player.playerId}
                player={player}
              />
            )
          })
        }
      </ListGroup>
    )
  }
}



export default DragDropContext(HTML5Backend)(LineupPlayers);