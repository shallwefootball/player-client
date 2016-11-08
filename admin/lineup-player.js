import React, { Component } from 'react'
import flow from 'lodash/flow'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'


export default class LineupPlayer extends Component {
  render() {
    const { player } = this.props

    return (
      <ListGroupItem>
        {player.playerName}
      </ListGroupItem>
    )
  }
}