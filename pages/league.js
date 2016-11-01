import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import config from '../config'
import actions from '../actions'

import Header from './header'

import SeasonLink from '../components/season-link'



class League extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSeason: props.league.seasons[0]
    }
  }

  handleChangeSeason(season) {
    this.setState({
      activeSeason: season
    })
  }

  render() {
    const { seasons } = this.props.league
    return (
      <div>
        <Header />
        <SeasonLink
          seasons={seasons}
          activeSeason={this.state.activeSeason}
          onChange={this.handleChangeSeason.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownState) => {

  const { league, match } = state
  return { league, match }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(League)