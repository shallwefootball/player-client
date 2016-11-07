import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import { initStore } from '../store'
import AdminLineup from '../admin/lineup'

import reducers from '../reducers'
import { dev } from '../config'
import { Provider } from 'react-redux'

const willMatchUrl = dev.apiUrl + '/will-match/'
const teamUrl = dev.apiUrl + '/team/'


export default class Lineup extends Component {

  static getInitialProps({ req, query }) {
    const isServer = !!req

    return Promise.all([
      getWillMatch(query.teamId),
      getTeamInfo(query.teamId)
    ])
      .then(values => {

        const store = initStore(reducers, {
          match: values[0],
          team: values[1]
        }, isServer)
        return { initialState: store.getState(), isServer }
      })
  }

  constructor(props) {
    super(props)
    this.store = initStore(reducers, props.initialState, props.isServer)
  }

  render() {
    return (
      <Provider store={this.store}>
        <AdminLineup />
      </Provider>
    )
  }
}



const getWillMatch = teamId => {
  return fetch(willMatchUrl + teamId, { method: 'get' })
    .then(res => {return res.json()})
    .then(match => {
      return match
    })
}

const getTeamInfo = teamId => {
  return fetch(teamUrl + teamId, { method: 'get'})
    .then(res => {return res.json()})
    .then(({ team }) => {
      return team
    })
}