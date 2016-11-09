import React, { Component } from 'react'

import Header from './header'
import LeagueLink from '../admin/league-link'


export default class LeagueLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <LeagueLink />
      </div>
    )
  }
}