import React, { Component } from 'react'

import Header from './header'
import ClubLink from '../admin/club-link'
import Fixture from '../components/fixture'


export default class LeagueLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <ClubLink url={this.props.url} />
      </div>
    )
  }
}