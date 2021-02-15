import React, { Component } from 'react';
import NavWeb from './Nav';
import '../CSSWeb/team.css';
import { withRouter } from 'react-router-dom';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderTableData = () => {
    return this.props.location.state.newTeam.players.map((player, index) => {
      return (
        <tr key={index} style={{ fontWeight: 'bold', width: '80%' }}>
          <td >{player.id}</td>
          <td >{player.name}</td>
          <td >{player.age}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: 'lightcyan', paddingBottom: 40 }}>
        <NavWeb />
        <center>
          <h1 style={{ textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique' }}>{this.props.location.state.newTeam.club}</h1>
          <img src={this.props.location.state.newTeam.imgClub} alt="oops" width='20%' />
          <p style={{ width: '70%', fontWeight: 'bold' }}>{this.props.location.state.newTeam.info}</p>
          <div>
            <h3 style={{ textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique' }}> סגל השחקנים</h3>
            <table>
              <tbody style={{ fontWeight: 'bold' }}>
                <tr style={{ backgroundColor: 'lightblue', width: '100%' }}>
                  <th style={{ width: '10%' }}>#</th>
                  <th style={{ width: '75%'}}>שם השחקן</th>
                  <th style={{ width: '15%' }}>גיל</th>
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

export default withRouter(Team);