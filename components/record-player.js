import React, { Component } from 'react'

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

export default class RecordPlayer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player: props.player
    }
  }

  componentWillReaceiveProps(nextProps) {
    this.setState({
      player: nextProps.player
    })
  }

  handleClickRecord(e) {
    this.props.onClickRecord(this.state.player)
  }


  render() {

    const { player, disabled } = this.props
    return (
      <ListGroupItem key={player.playerId} disabled={disabled}>
        {player.matchPosition} {player.squadNumber} - {player.playerName}
        {" "}
        <Button
          bsStyle="default"
          bsSize="xsmall"
          onClick={this.handleClickRecord.bind(this)}
        >
          기록
        </Button>
        {" "}
        <Button bsStyle="default" bsSize="xsmall">교체</Button>
      </ListGroupItem>
    )
  }
}