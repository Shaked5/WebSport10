import React, { Component } from 'react';
import NavWeb from './Nav';

class TableTeams extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.state = {
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams'))
    }
  }

  renderTableData = () => {
    if (this.state.teamsFromLocalstorage === null) {
      return this.props.teams.sort((a, b) => a.points < b.points ? 1 : -1).map((team, index) => {
        return (
          <tr key={index}>
            <td>{this.id++}</td>
            <td>{team.club}</td>
            <td>{team.win}</td>
            <td>{team.draw}</td>
            <td>{team.loss}</td>
            <td>{team.points}</td>
          </tr>
        )
      })
    }else{
      return this.state.teamsFromLocalstorage.sort((a, b) => a.points < b.points ? 1 : -1).map((team, index) => {
        return (
          <tr key={index}>
            <td>{this.id++}</td>
            <td>{team.club}</td>
            <td>{team.win}</td>
            <td>{team.draw}</td>
            <td>{team.loss}</td>
            <td>{team.points}</td>
          </tr>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <NavWeb />
        <div>
          <h3 id='title'>דירוג קבוצות</h3>
          <table id="containerTable">
            <tbody>
              <tr>
                <th>מקום</th>
                <th>שם הקבוצה</th>
                <th>נצחונות</th>
                <th>תיקו</th>
                <th>הפסדים</th>
                <th>נקודות</th>
              </tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TableTeams;