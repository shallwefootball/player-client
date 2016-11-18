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
                  <td>{club.clubName}</td>
                  <td>{club.stat.points}</td>
                  <td>{club.stat.played}</td>
                  <td>{club.stat.won}</td>
                  <td>{club.stat.drawn}</td>
                  <td>{club.stat.lost}</td>
                  <td>{club.stat.for}</td>
                  <td>{club.stat.against}</td>
                  <td>{club.stat.different}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    )
  }
}


