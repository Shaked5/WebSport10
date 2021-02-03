import React, { Component } from 'react';
import NavWeb from './Nav';
import '../index.css';
import { Button, Collapse, Form, Col } from 'react-bootstrap/';
import { withRouter } from 'react-router-dom';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.id_Player = 1
    this.state = {
      open: false,
      club: "",
      imgClub: "",
      info: "",
      players: [],
      playerName: "",
      age: 0,
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams'))
    }
  }
  setOpen = () => {
    this.setState({ open: !this.state.open })
  }

  addPlayer = () => {
    let player = { id: this.id_Player, name: this.state.playerName, age: this.state.age }
    this.id_Player++;
    this.setState({ players: [...this.state.players, player], playerName: "", age: "" })

  }

  sendTeamToParent = () => {
    if (this.state.club !== "" && this.state.imgClub !== "" && this.state.players !== [] && this.state.info !== "") {
      this.props.sendToParent({ club: this.state.club, imgClub: this.state.imgClub, info: this.state.info, players: this.state.players })
      this.setState({ club: "", imgClub: "", info: "" })
    }

    else {
      alert("all details is required!")
    }
  }

  sendTeamToPrint = (index1) => {
    if (this.state.teamsFromLocalstorage === null) {
      let newTeam = this.props.teams.find(team => team.id === index1);

      this.props.history.push({
        pathname: '/team',
        state: { newTeam: newTeam }
      })
    } else {
      let newTeam = this.state.teamsFromLocalstorage.find(team => team.id === index1);
      console.log(newTeam);
      this.props.history.push({
        pathname: '/team',
        state: { newTeam: newTeam }
      })
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: 'lightcyan' }}>
        <NavWeb />
        <br />
        <center>
          <h1 style={{ color: 'lightseagreen', fontStyle: 'oblique', fontSize: 50 }}>קבוצות הליגה</h1>
        </center>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {this.state.teamsFromLocalstorage && this.state.teamsFromLocalstorage.map((team, index) =>
            <div index={team.id} style={{ textAlign: 'center', marginTop: '5%', padding: '2%' }}>
              <img style={{ cursor: 'pointer' }} index={team.id} src={team.imgClub} alt="stam" width="300" height="200"
                onClick={() => this.sendTeamToPrint(team.id)} />
              <b><p index={team.id}> {team.club} </p></b>
            </div>
          )}
          {!this.state.teamsFromLocalstorage && this.props.teams.map((team, index) =>
            <div index={team.id} style={{ textAlign: 'center', marginTop: '5%', padding: '2%' }}>
              <img style={{ cursor: 'pointer' }} index={team.id} src={team.imgClub} alt="stam" width="300" height="200"
                onClick={() => this.sendTeamToPrint(team.id)} />
              <b><p index={team.id}> {team.club} </p></b>
            </div>
          )}
        </div>
        <br />
        <center>
          <Button variant="dark" onClick={this.setOpen}
            aria-controls="example-collapse-text"
            aria-expanded={this.state.open}
          >הוספת קבוצה</Button>
          <Collapse in={this.state.open}>

            <Form style={{ width: '70%' }}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label >שם קבוצה</Form.Label>
                  <Form.Control type="text" value={this.state.club}
                    onChange={e => this.setState({ club: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>סמל הקבוצה</Form.Label>
                  <Form.Control type="text" value={this.state.imgClub}
                    onChange={e => this.setState({ imgClub: e.target.value })} />
                  <Form.Text className="text-muted">
                    הכנס לינק של סמל הקבוצה
                  </Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Label>הכנס רשימת שחקנים</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>שם שחקן</Form.Label>
                  <Form.Control type="text" value={this.state.playerName}
                    onChange={e => this.setState({ playerName: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>גיל</Form.Label>
                  <Form.Control type="number" value={this.state.age}
                    onChange={e => this.setState({ age: e.target.value })} />
                </Form.Group>

              </Form.Row>
              <Form.Group>
                <Button variant="outline-dark" onClick={this.addPlayer} >הוספת שחקן</Button>
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>מידע על הקבוצה</Form.Label>
                <Form.Control as="textarea" rows={3} value={this.state.info}
                  onChange={e => this.setState({ info: e.target.value })} ></Form.Control>
              </Form.Group>
              <Button variant="outline-dark" onClick={this.sendTeamToParent}>
                אישור
               </Button>
            </Form>

          </Collapse>
        </center>
        <br />
      </div>
    );
  }
}
export default withRouter(Teams);