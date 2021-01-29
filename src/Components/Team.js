import React, { Component } from 'react';
import NavWeb from './Nav';
import '../index.css';
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
        <tr key={index}>
          <td>{player.id}</td>
          <td>{player.name}</td>
          <td>{player.age}</td>
        </tr>
      )
    })
  }
  render() {
    console.log(this.renderTableData);
    return (
      <div>
        <NavWeb />
        <center>
          <h1>{this.props.location.state.newTeam.club}</h1>
          <img src={this.props.location.state.newTeam.imgClub} alt="oops" width="400" height="250" />
          <p style={{ width: '70%' }}>{this.props.location.state.newTeam.info}</p>
          <div>
            <h3 id='title'> סגל השחקנים</h3>
            <table id="containerTable">
              <tbody>
                <tr>
                  <th>מספר</th>
                  <th>שם השחקן</th>
                  <th>גיל</th>
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