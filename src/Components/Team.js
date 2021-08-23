import React, { Component } from 'react';
import NavWeb from './Nav';
import '../CSSWeb/team.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:53291/api/PlayersRW/").then(response => {
      //console.log(response.data);  
      this.setState({
        playerList: response.data,
      });
    });
  }
  renderTableData = () => {
    let id = 1;
    return this.state.playerList.filter(player => player.TeamName === this.props.location.state.newTeam.ClubName)
      .map((player, index) => (
        <tr key={index} style={{ fontWeight: 'bold', width: '80%' }}>
          <td >{id++}</td>
          <td >{player.PlayerName}</td>
          <td >{player.Age}</td>
          <td >{player.ShirtNum}</td>
        </tr>
      ));
  }



  render() {
    return (
      <div style={{ backgroundColor: 'lightcyan', paddingBottom: 40 }}>
        <NavWeb />
        <center>
          <h1 style={{ textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique' }}>{this.props.location.state.newTeam.ClubName}</h1>
          <img src={this.props.location.state.newTeam.ImgClub} alt="oops" width='20%' />
          <p style={{ width: '70%', fontWeight: 'bold' }}>{this.props.location.state.newTeam.Info}</p>
          <div>
            <h3 style={{ textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique' }}> סגל השחקנים</h3>
            <table>
              <tbody style={{ fontWeight: 'bold' }}>
                <tr style={{ backgroundColor: 'lightblue', width: '100%' }}>
                  <th style={{ width: '10%' }}>#</th>
                  <th style={{ width: '45%' }}>שם השחקן</th>
                  <th style={{ width: '25%' }}>גיל</th>
                  <th style={{ width: '25%' }}>מספר חולצה</th>
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