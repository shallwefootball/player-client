import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { initStore } from '../store'
import reducers from '../reducers'

import IndexLayout from '../layout/index'
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
        <IndexLayout />
      </Provider>
    )
  }
}