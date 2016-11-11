import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'

class ClubLink extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    const { actions, url } = this.props

    actions.getClubs(url.query.leagueId)
  }

  render() {

    return (
      <div>
        {
          this.props.club.clubs.map(club => {
            return (
              <Link href={'/lineup?clubId=' + club.clubId + '&leagueId=' + this.props.url.query.leagueId} key={club.clubId}>
                <Button>
                  {club.teamName}
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

  const { club } = state
  return { club }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClubLink)