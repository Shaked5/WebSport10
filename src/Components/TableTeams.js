import React, { Component } from 'react';
import NavWeb from './Nav';
import '../CSSWeb/table.css';
import { withRouter } from 'react-router-dom';
import israelLig from '../images/israelLeage.png';
class TableTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams')),
    }
  }



  sendTeamToPrint = (id) => {
    let newTeam;
      newTeam = this.props.teams.find(team => team.id === id);
      this.props.history.push({
        pathname: '/team',
        state: { newTeam: newTeam }
      })
  }

  renderTableData = () => {
    let idTable = 1;
      return this.props.teams.sort((a, b) => a.Point < b.Point ? 1 : -1).map((team, index) => {
        return (
          <tr key={index}>
            <td>{idTable++}</td>
            <td style={{ cursor: 'pointer' }} onClick={() => this.sendTeamToPrint(team.IdTeam)}>{team.ClubName}</td>
            <td>{team.Win}</td>
            <td>{team.Draw}</td>
            <td>{team.Lose}</td>
            <td>{team.Point}</td>
          </tr>
        )
      })
  }

  render() {
    return (
      <div style={{ backgroundColor: 'lightcyan', paddingBottom: 50 }}>
        <NavWeb />
        <div>
          <center>
            <h3 style={{ marginTop: 10, textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique', fontSize: 46 }}>דירוג הקבוצות</h3>
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
            <div style={{ marginTop: 60 }}>
              <img src={israelLig} style={{ width: '40%', borderRadius: 8, boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 22px 0' }} />
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default withRouter(TableTeams);