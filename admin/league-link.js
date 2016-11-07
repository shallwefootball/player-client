import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from '../components/header'

class LeagueLink extends Component {

  constructor(props) {
    super(props)
    console.log("props  : ", props)
  }

  componentDidMount() {
    this.props.actions.getLeagues()
  }

  render() {

    return (
      <div>
        <Header />
        {
          this.props.league.leagues.map(league => {
            return (
              <Link href={'/league?leagueId=' + league.leagueId} key={league.leagueId}>
                <Button>
                  {league.community} {league.season}
                </Button>
              </Link>
            )
          })
        }
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
)(LeagueLink)