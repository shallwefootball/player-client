import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import flow from 'lodash/flow'
import { DragSource, DropTarget } from 'react-dnd';

import Badge from 'react-bootstrap/lib/Badge'

import PositionButton from './position-button'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
}

const playerSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    }
  }
}

const playerTarget = {

  drop(props, monitor, component) {
    // console.log('props : ', props)
    // console.log('monitor : ', monitor)
    // console.log('component : ', component)
    props.onDropPlayer()
  },
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }



    // Time to actually perform the action
    props.onHoverPlayer(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

class LineupPlayer extends Component {

  handleChangePosition(position) {
    this.props.onChangePosition(this.props.player.playerId, position)
  }

  _renderPosition(index, position) {
    if(index < 11) {
      return (
        <Badge>{position}</Badge>
      )
    }
    return (
      <PositionButton
        matchPosition={position}
        onChangePosition={this.handleChangePosition.bind(this)}
      />
    )
  }

  render() {
    const {
      index,
      isDragging,
      connectDragSource,
      connectDropTarget,
      player,
      subCount,
      actions
    } = this.props

    const opacity = isDragging ? 0 : 1;
    let backgroundColor = null;

    let disabled = false

    if(index < 11 + subCount) {
      backgroundColor = 'bisque'
    }
    if(index < 11) {
      backgroundColor = 'azure'
      disabled = true
    }

    return connectDragSource(connectDropTarget(
      <div style={{ ...style, opacity, backgroundColor }}>
        {this._renderPosition(index, player.matchPosition)}
        {" "}- {player.playerName}
      </div>
    ))
  }
}

export default flow(
  DropTarget('player', playerTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource('player', playerSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
)(LineupPlayer)