import React, { Component } from 'react'
import config from '../config'
import Header from './header'

import SeasonLink from '../components/season-link'

const url = config.dev.apiUrl + '/league/'

export default class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leagues: [],
      seasons: [],
      activeSeason: '',
      matches: []
    }
  }

  handleChangeSeason(season) {

    console.log('season  : ', season)

    this.setState({
      activeSeason: season
    })

    const activeSeason = this.state.leagues.filter(league => {
      return league.season == season ? true : false
    })

    console.log('activeSeason  : ', activeSeason)
  }

  componentDidMount() {
    const seasonUrl = url
    fetch(seasonUrl, {
      method: 'get'
    })
    .then(res => (res.json())).then(json => {
      const seasons = json.leagues.map(league => {
        return league.season
      })

      this.setState({
        leagues: json.leagues,
        seasons: seasons,
        activeSeason: seasons[0]
      })

      return json.leagues
    })
    .then(leagues => {
      return fetch(url + leagues[0].leagueId, {
        method: 'get'
      })
    })
    .then(res => (res.json())).then(json => {
      this.setState({
        matches: json.matches
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SeasonLink
          seasons={this.state.seasons}
          activeSeason={this.state.activeSeason}
          onChange={this.handleChangeSeason.bind(this)}
        />
      </div>
    )
  }
}
