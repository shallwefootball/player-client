import React, { Component } from 'react'
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

import LineupPlayer from './lineup-player'

class LineupPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player: props.player
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      player: nextProps.player
    })

  }

  handleHover(dragIndex, hoverIndex) {
    const { players } = this.state.player;
    const dragPlayer = players[dragIndex];

    this.setState(update(this.state, {
      player: {
        players: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragPlayer]
          ]
        }
      }
    }));
  }

  handleDrop(dragIndex, hoverIndex) {
    const players = this.state.player.players.map((player, i) => {
      player.orderNumber = i
      return player
    })

    this.props.actions.setPlayers(players)
  }

  render() {

    return (
      <ListGroupItem>
        {
          this.state.player.players.map((player, i) => {
            return (
              <LineupPlayer
                key={player.playerId}
                id={player.playerId}
                index={i}
                player={player}
                onHoverPlayer={this.handleHover.bind(this)}
                onDropPlayer={this.handleDrop.bind(this)}
                subCount={this.props.subCount}
              />
            )
          })
        }
      </ListGroupItem>
    )
  }
}



export default DragDropContext(HTML5Backend)(LineupPlayers);