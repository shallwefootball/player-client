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
    const subMode = e.target.value == 'sub' ? true : false
    this.props.onClickRecord(this.state.player, { subMode })
  }


  render() {

    const { player, subed } = this.props

    return (
      <ListGroupItem key={player.playerId} disabled={subed}>
        {player.matchPosition} {player.squadNumber} - {player.playerName}
        {" "}
        <Button
          bsStyle="default"
          bsSize="xsmall"
          onClick={this.handleClickRecord.bind(this)}
          disabled={subed}
          value="record"
        >
          기록
        </Button>
        {" "}
        <Button
          bsStyle="default"
          bsSize="xsmall"
          onClick={this.handleClickRecord.bind(this)}
          disabled={subed}
          value="sub"
        >
          교체
        </Button>
      </ListGroupItem>
    )
  }
}