import React, { Component } from 'react'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

export default class Records extends Component {

  handleClickDelete(e) {
    const { actions, url } = this.props
    if(confirm('삭제할건가여?')) {
      // console.log('remove')
      actions.deleteRecord(e.target.value)
        .then(() => {
          actions.getRecords(url.query.matchId)
        })
    }
  }

  render() {

    const groupRecords = this.props.records.reduce((prev, next) => {
      if(next.recordName == 'out') {
        prev[prev.length - 1].push(next)
        return prev
      }

      prev.push(new Array(next))
      return prev
    }, new Array())

    return (
      <div style={{flex: 1}}>
        <ListGroup>
          {
            groupRecords.map((records, i) => {

              return (
                <ListGroupItem key={'records_' + i}>
                {
                  records.map(record => {
                    console.log('record  : ', record)
                    const { playerName, recordName, minutes } = record
                    return (
                      <p key={record.recordId}>
                        {minutes} - {recordName} {playerName}
                        {' '}
                        <Button
                          bsSize="xsmall"
                          value={record.recordId}
                          onClick={this.handleClickDelete.bind(this)}
                        >
                          삭제
                        </Button>
                      </p>
                    )
                  })
                }
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </div>
    )
  }
}