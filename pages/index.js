import React, { Component } from 'react'
import { Provider } from 'react-redux'
import fetch from 'isomorphic-fetch'

import { initStore } from '../store'
import reducers from '../reducers'

import Main from '../components/main'
import retina from 'retinajs'

export default class Index extends Component {

  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(reducers, {}, isServer)
    return  { initialState: store.getState(), isServer }
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
        <Main />
      </Provider>
    )
  }
}