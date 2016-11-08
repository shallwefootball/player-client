import React, { Component } from 'react'
import { Provider } from 'react-redux'
import fetch from 'isomorphic-fetch'

import { initStore } from '../store'
import reducers from '../reducers'

import ClubLink from '../admin/club-link'
import LeagueLink from '../admin/league-link'

export default class Admin extends Component {

  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(reducers, {}, isServer)
    return  { initialState: store.getState(), isServer }
  }

  constructor(props) {
    super(props)
    this.store = initStore(reducers, props.initialState, props.isServer)
  }

  render() {
    return (
      <Provider store={this.store}>
        <LeagueLink />
      </Provider>
    )
  }
}