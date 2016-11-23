import React, { Component } from 'react'

import Table from 'react-bootstrap/lib/Table'

export default class LeagueRank extends Component {

  render() {

    return (

      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Club</th>
            <th>Pts</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.ranks.map((club, index) => {
              return (
                <tr key={club.clubId}>
                  <td>{index + 1}</td>
                  <td>{club.teamName}</td>
                  <td>{club.points}</td>
                  <td>{club.played}</td>
                  <td>{club.won}</td>
                  <td>{club.drawn}</td>
                  <td>{club.lost}</td>
                  <td>{club.for}</td>
                  <td>{club.against}</td>
                  <td>{club.different}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    )
  }
}


