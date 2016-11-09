import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { initStore } from '../store'
import reducers from '../reducers'

import LeagueLayout from '../layout/League'

export default class League extends Component {

  static getInitialProps({ req, query }) {
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
        <LeagueLayout url={this.props.url} />
      </Provider>
    )
  }
}
