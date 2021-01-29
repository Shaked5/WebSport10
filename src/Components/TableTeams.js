import React, { Component } from 'react';
import NavWeb from './Nav';
import { withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap/';
class TableTeams extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.state = {
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams')),
    }
  }

 
  sendTeamToPrint = (index) => {
    if (this.state.teamsFromLocalstorage === null) {
      let newTeam = this.props.teams.find(team => team.id === index);

      this.props.history.push({
        pathname: '/team',
        state: { newTeam: newTeam }
      })
    } else {
      let newTeam = this.props.teamsFromLocalstorage.find(team => team.id === index);
      console.log(newTeam);
      this.props.history.push({
        pathname: '/team',
        state: { newTeam: newTeam }
      })
    }
  }

  renderTableData = () => {
    if (this.state.teamsFromLocalstorage === null) {
      return this.props.teams.sort((a, b) => a.points < b.points ? 1 : -1).map((team, index) => {
        return (
          <tr key={index}>
            <td>{this.id++}</td>
            <td onClick={() => this.sendTeamToPrint(team.id)}>{team.club}</td>
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
          <tr key={index}>
            <td>{this.id++}</td>
            <td onClick={() => this.sendTeamToPrint(team.id)}>{team.club}</td>
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
          <div>
            <h3 id='title'>דירוג הקבוצות</h3>
            <table id="containerTable">
              <tbody style={{ alignItems: 'center' }}>
                <tr style={{ color: 'blue', backgroundColor: 'lightblue' }}>
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
          <br />
          <div>
            <Card className="text-center">
              <Card.Header style={{ fontSize: 20 }}><b>פינת ההגרלה</b></Card.Header>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>בחר קבוצות ולחץ על אישור כדי לראות את תוצאת המשחק</Card.Title>
                <br />
                <Card.Text>
                  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                      <select onChange={this.handleTeamA}>
                        <option value=''>בחר קבוצה</option>
                        {this.props.teams.map((team, index) => <option key={index} value={team.id} >
                          {team.club}
                        </option>

                        )}
                      </select>
                    </div>

                    <div style={{}}>
                      <select onChange={this.handleTeamB}>
                        <option value=''>בחר קבוצה</option>
                        {this.props.teams.map((team, index) => <option key={index} value={team.id}>
                          {team.club}
                        </option>

                        )}
                      </select>

                    </div>
                  </div>
                </Card.Text>

                <Button variant="success" onClick={this.handleGameBtn}>אשר בחירה</Button><br /><br />
                {this.props.pointsB}:{this.props.pointsA}
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          </div>
        </center>
      </div>
    );
  }
}

export default withRouter(TableTeams);