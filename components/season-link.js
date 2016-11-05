import React, { Component } from 'react'

import Button from 'react-bootstrap/lib/Button'
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb'

export default class SeasonLink extends Component {

  constructor(props) {
    super(props)
  }

  handleClick(e) {

    const season = e.target.textContent
    this.props.onChange(season)
  }

  render() {

    console.log('this.props.seasons  : ', this.props.seasons)
    return (
      <Breadcrumb>
        {this.props.seasons.map(val => {
          return (
            <Breadcrumb.Item
              key={'season_' + val}
              onClick={this.handleClick.bind(this)}
              active={val == this.props.activeSeason ? true : false}
            >
              {val}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
    )
  }
}
