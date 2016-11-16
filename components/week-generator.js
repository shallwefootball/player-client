import React, { Component } from 'react'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Panel from 'react-bootstrap/lib/Panel'

import { DateField } from 'react-date-picker'

export default class WeekGenerator extends Component {

  constructor() {
    super()

    this.state = {
      start: {},
      end: {}
    }
  }

  handleChangeStart(dateString) {
    this.setState({
      start: this._getParsedSaturday(dateString)
    })

  }
  handleChangeEnd(dateString) {
    this.setState({
      end: this._getParsedSaturday(dateString)
    })
  }

  _getParsedSaturday(dateString) {
    if (!dateString) return {}

    const dateArr = dateString.split('-')
    dateArr[1] = Number.parseInt(dateArr[1]) - 1
    return moment(dateArr).day('Saturday')
  }

  _getWeekends(start, end, weeks, count = 0) {

    if(weeks[weeks.length - 1].toString() == end.toString()) {
      return weeks
    }

    // this.state.start의 값이 증가하기때문에
    // 참조하는 부분을 copy해서 끊어줘야한다. 그래서 clone
    weeks.push(start.clone().add(++count, 'w'))
    return this._getWeekends(start, end, weeks, count)
  }

  _renderWeeks() {

    const { start, end } = this.state
    if(isEmpty(start) || isEmpty(end)) return

    const ableWeekends = this._getWeekends(start, end, [start])

    return ableWeekends.map((weekend, i) => {
      return <ListGroupItem key={i}>{weekend.format('YYYY-MM-DD')}</ListGroupItem>
    })
  }



  render() {
    const { start, end } = this.state

    const cStart = Object.assign({}, start)
    const cEnd = Object.assign({}, end)

    return (
      <Panel>
        <p>경기가 가능한 주말</p>
        <div>
          Start week :
          {' '}
          <DateField
            dateFormat="YYYY-MM-DD"
            onChange={this.handleChangeStart.bind(this)}
          />
        </div>
        <br />
        <div>
          End week :
          {' '}
          <DateField
            dateFormat="YYYY-MM-DD"
            onChange={this.handleChangeEnd.bind(this)}
          />
        </div>
        <ListGroup>

          {this._renderWeeks()}
        </ListGroup>

      </Panel>
    )
  }
}
