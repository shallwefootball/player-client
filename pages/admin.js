import React, { Component } from 'react'
import { Provider } from 'react-redux'
import fetch from 'isomorphic-fetch'

import TeamLink from '../admin/team-link'
import { initStore } from '../store'
import reducers from '../reducers'
import { dev } from '../config'

const url = dev.apiUrl + '/teams'

export default class Admin extends Component {


  static getInitialProps({ req }) {
    const isServer = !!req

    return fetch(url, { method: 'get' })
      .then(res => (res.json()))
      .then(({ teams }) => {
        const team = { teams: teams }
        const store = initStore(reducers, {team}, isServer)
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
        <TeamLink />
      </Provider>
    )
  }
}