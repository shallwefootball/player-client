import React, { Component } from 'react'

import Panel from 'react-bootstrap/lib/Panel'

import Header from '../components/header'

export default class Match extends Component {
  render() {
    return (
      <div>
        <Header />
        <Panel>
          Basic panel example
        </Panel>
      </div>
    )
  }
}