import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import config from '../config'
const url = config.dev.apiUrl + '/league'


const redu = (state, action) => {

  // console.log('redu state : ', state)
  switch(action.type) {
    default: return state
  }
  // return {hi: 'imtest'}
}

export default class Test extends Component {

  static getInitialProps({req, res}) {

    return fetch(url, {
      method: 'get'
    })
    .then(res => (res.json()))
    .then( ({leagues}) => {
      const seasons = leagues.map(league => (league.season))
      const initSate = {
        leagues: leagues,
        seasons: seasons,
        activeSeason: seasons[0]
      }

      const store = createStore(redu, initSate, applyMiddleware(thunkMiddleware))
      return {initState: store.getState()}
    })
  }

  constructor(props) {
    super(props)

    // console.log('test props  : ', props)
  }

  render () {
    return (
      <div>test</div>
    )
  }
}