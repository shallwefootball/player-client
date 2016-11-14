import React, { Component } from 'react'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

export default class Records extends Component {

  handleClickDelete(e) {
    const { actions, url } = this.props

    const recordIds = e.target.value.split(',')

    if(confirm('삭제할건가여?')) {

      Promise.all(recordIds.map(recordId => (recordId ? actions.deleteRecord(recordId) : null)))
        .then(() => {
          actions.getRecords(url.query.matchId)
        })
    }
  }

  _renderDeleteButton(record, nextRecord) {

    return (
      <Button
        bsSize="xsmall"
        value={[record.recordId, nextRecord ? nextRecord.recordId : null]}
        onClick={this.handleClickDelete.bind(this)}
      >
        삭제
      </Button>
    )
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
                  records.map((record, index) => {
                    const { playerName, recordName, minutes } = record
                    return (
                      <p key={record.recordId}>
                        {minutes} - {recordName} {playerName}
                        {' '}
                        {index ? null : this._renderDeleteButton(record, records[index + 1])}
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