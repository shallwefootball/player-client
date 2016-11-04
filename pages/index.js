import React, { Component } from 'react'
import { Provider } from 'react-redux'
import retina from 'retinajs'

import { initStore } from '../store'

import reducers from '../reducers'

import Login from './login'
import League from './league'

import config from '../config'

const url = config.dev.apiUrl + '/league'

export default class Index extends Component {

  static getInitialProps({ req }) {
    const isServer = !!req

    return fetch(url, { method: 'get' })
      .then(res => (res.json()))
      .then(({ leagues }) => {
        const league = { leagues: leagues }
        const store = initStore(reducers, {league}, isServer)
        return { initialState: store.getState(), isServer }
      })
  }

  constructor(props) {
    super(props)
    this.store = initStore(reducers, props.initialState, props.isServer)
  }

  componentDidMount() {
    window.onload = () => (retina())
  }

  render() {
    return (
      <Provider store={this.store}>
        <League />
      </Provider>
    )
  }
}

// <Login />