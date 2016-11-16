import React, { Component } from 'react'

import Header from './header'
import LeagueLink from '../admin/league-link'
import WeekGenerator from '../components/week-generator'

export default class LeagueLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <LeagueLink />
        <WeekGenerator />
      </div>
    )
  }
}