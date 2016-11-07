import React, { Component } from 'react'
import { Provider } from 'react-redux'
import fetch from 'isomorphic-fetch'

import { initStore } from '../store'
import reducers from '../reducers'

import ClubLink from '../admin/club-link'


import { dev } from '../config'
const url = dev.apiUrl + '/clubs/'

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
        <ClubLink url={this.props.url} />
      </Provider>
    )
  }
}
