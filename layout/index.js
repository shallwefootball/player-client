import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions'

import Link from 'next/link'

import Button from 'react-bootstrap/lib/Button'

import Header from './header'


class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <div>다음 일정</div>
        <div>개인 스텟</div>
        <div>팀 스텟</div>
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

  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
