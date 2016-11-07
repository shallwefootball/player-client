import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'

import Button from 'react-bootstrap/lib/Button'

import actions from '../actions'
import Header from '../components/header'

class ClubLink extends Component {

  constructor(props) {
    super(props)
    console.log("club props  : ", props)
  }

  componentDidMount() {

    const { actions, url } = this.props

    actions.getClubs(url.query.leagueId)
  }

  render() {

    return (
      <div>
        <Header />
        {
          this.props.club.clubs.map(club => {
            return (
              <Link href={'/lineup?clubId=' + club.clubId} key={club.clubId}>
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



        // {
        //   this.props.team.teams.map(team => {
        //     return (
        //       <div key={team.teamId}>
        //         <Button
        //           href={'/lineup?teamId=' + team.teamId}
        //         >
        //           {team.teamName}
        //         </Button>
        //       </div>
        //     )
        //   })
        // }