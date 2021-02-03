import React, { Component } from 'react';
import NavWeb from './Nav';
import '../CSSWeb/table.css';
import { withRouter } from 'react-router-dom';
class TableTeams extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.state = {
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams')),

    }
  }



  sendTeamToPrint = (id) => {
    let newTeam;
    if (this.state.teamsFromLocalstorage === null) {
      newTeam = this.props.teams.find(team => team.id === id);

      this.props.history.push({
        pathname: '/team',
        state: { newTeam: newTeam }
      })
    } else {
      newTeam = this.state.teamsFromLocalstorage.find(team => team.id === id);
      console.log(newTeam);
      this.props.history.push({
        pathname: '/team',
        state: { newTeam: newTeam }
      })
    }
  }

  renderTableData = () => {
    debugger
    if (this.state.teamsFromLocalstorage === null) {
      return this.props.teams.sort((a, b) => a.points < b.points ? 1 : -1).map((team, index) => {
        return (
          <tr key={index}>
            <td>{this.id++}</td>
            <td style={{ cursor: 'pointer' }} onClick={() => this.sendTeamToPrint(team.id)} clickable={true}>{team.club}</td>
            <td>{team.win}</td>
            <td>{team.draw}</td>
            <td>{team.loss}</td>
            <td>{team.points}</td>
          </tr>
        )
      })
    } else {
      return this.state.teamsFromLocalstorage.sort((a, b) => a.points < b.points ? 1 : -1).map((team, index) => {
        return (
          <tr style={{ fontSize: '20px', fontWeight: 'bold' }} key={index} >
            <td >{this.id++}</td>
            <td style={{ cursor: 'pointer' }} onClick={() => this.sendTeamToPrint(team.id)} >{team.club}</td>
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
        <center>
          <div className="container">
            <br />
            <h3>דירוג הקבוצות</h3>
            <table id="containerTable">
              <tbody>
                <tr style={{ fontSize: '20px', fontWeight: 'bold', color: 'blue', backgroundColor: 'lightblue' }}>
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
        </center>
      </div>
    );
  }
}

export default withRouter(TableTeams);