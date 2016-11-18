import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Link from 'next/link'

import Button from 'react-bootstrap/lib/Button'

import Header from './header'


class Test extends Component {

  componentDidMount() {
    const { actions, url } = this.props

    actions.getLeagueRank(6)
  }

  render() {

    console.log('render...')
    return (
      <div>
        <Header />
        <div>test</div>
        <Link href="/admin">
          <Button>
            admin으로 가기
          </Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownState) => {
  const { league } = state
  return { league }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)
