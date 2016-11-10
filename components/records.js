import React, { Component } from 'react'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

export default class Records extends Component {
  render() {
    return (
      <div style={{flex: 1}}>
        <ListGroup>
          {
            this.props.records.map(record => {

              const { playerName, recordName, minutes } = record
              return (
                <ListGroupItem key={record.recordId}>
                  {minutes} - {recordName} {playerName}
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </div>
    )
  }
}