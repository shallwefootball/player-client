import React, { Component } from 'react'
import moment from 'moment'
import isEmpty from 'lodash/isEmpty'

import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Panel from 'react-bootstrap/lib/Panel'

import { DateField } from 'react-date-picker'

const exceptedDays = [
  moment([2017, 4, 6]).toString(),  // 5월 6일 - 5월 5일 어린이날
  moment([2017, 5, 3]).toString(),  // 6월 3일 - 6월 6일(화요일)이 현충일
  moment([2017, 7, 12]).toString(), // 8월 12일 - 8월 15일(화요일)에 광복절
  moment([2017, 9, 7]).toString(),  // 10월 7일 - 추석연휴
  moment([2017, 6, 22]).toString(), // 7월 22일 - 휴가철
  moment([2017, 6, 29]).toString(), // 7월 29일 - 휴가철
  moment([2017, 7, 5]).toString()   // 8월 5일 - 휴가철
]

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

    let ableWeekends = this._getWeekends(start, end, [start])

    ableWeekends = ableWeekends.filter(weekend => {
      return !exceptedDays.some(dayStr => {
        return dayStr == weekend.toString()
      })
    })

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
