import React, { Component } from 'react';
import NavWeb from './Nav';
import '../CSSWeb/team.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playersLocal : [],
      playerList : []
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
  //TODO: Fix this function 
  // renderTableData = () => {
  //   let id = 1;
  //   let players = this.state.playerList.filter((player,index) => player.TeamName === this.props.location.state.newTeam.ClubName);
  //   this.setState({playersLocal:players})
  //    this.state.playersLocal.map((player,index) => {
  //     return (
  //       <tr key={index} style={{ fontWeight: 'bold', width: '80%' }}>
  //         <td >{player.id++}</td>
  //         <td >{player.PlayerName}</td>
  //         <td >{player.Age}</td>
  //       </tr>
  //     )
  //   })
  // }

  render() {
    console.log(this.props.location.state.newTeam.ClubName)
    console.log(this.state.playerList)
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
                  <th style={{ width: '75%'}}>שם השחקן</th>
                  <th style={{ width: '15%' }}>גיל</th>
                </tr>
                {this.renderTableData() }
              </tbody>
            </table>
          </div>
        </center>
      </div>
    );
  }
}

export default withRouter(Team);