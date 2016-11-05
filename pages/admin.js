import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import Header from './header'
import SubmitPlayer from '../admin/submit-player'
import { initStore } from '../store'
import reducers from '../reducers'
import { dev } from '../config'

const url = dev.apiUrl + '/team'

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

  render() {
    return (
      <div>
        <Header />
        <SubmitPlayer />
      </div>
    )
  }
}