import React, { Component } from 'react'

import Header from './header'
import SubmitPlayer from '../admin/submit-player'

export default class Admin extends Component {


  static getInitialProps({ req }) {
    const isServer = !!req

    // return fetch(url, { method: 'get' })
    //   .then(res => (res.json()))
    //   .then(({ leagues }) => {
    //     const league = { leagues: leagues }
    //     const store = initStore(reducers, {league}, isServer)
    //     return { initialState: store.getState(), isServer }
    //   })
  }

  render() {
    return (
      <div>
        <Header />
        <SubmitPlayer />
      </div>
    )
  }
}