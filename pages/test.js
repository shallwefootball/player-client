import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { initStore } from '../store'
import reducers from '../reducers'

import TestLayout from '../layout/test'

export default class Test extends Component {

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
        <TestLayout url={this.props.url}/>
      </Provider>
    )
  }
}