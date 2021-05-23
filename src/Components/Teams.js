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
      shirt_num: 0,
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams'))
    }
  }




  setOpen = () => {
    this.setState({ open: !this.state.open })
  }

  addPlayer = () => {
    // var regex = new RegExp('^[a-zA-Z\u0590-\u05FF]+$')
    // if (!regex.test(this.state.playerName) || this.state.age > 40 || this.state.age < 16) {
    //   alert('אנא בדוק אם טווח גילאים הוא בין 16-40, ניתן לרשום רק בשפה העברית')
    //   return;
    // }
    var requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        TeamName: this.state.club,
        PlayerName: this.state.playerName,
        Age: this.state.age,
        ShirtNum: this.state.shirt_num
      })
    };
    fetch('http://localhost:53291/api/playersRW/post', requestOptions)
      .then(response => response.json())
      .then(res => {
        this.setState({ playerName: "", age: "", shirt_num: "" })
        console.log(res)
      });
  }

  sendTeamToParent = () => {
    // var regex = new RegExp('^[a-zA-Z\u0590-\u05FF]+$')
    // if (!regex.test(this.state.club) || !regex.test(this.state.info)) {
    //   alert('ניתן לרשום רק בשפה העברית')
    //   return;
    // }
    if (this.state.club !== "" && this.state.imgClub !== "" && this.state.players !== [] && this.state.info !== "") {
      this.props.sendToParent({ club: this.state.club, imgClub: this.state.imgClub, info: this.state.info })
      this.setState({ club: "", imgClub: "", info: "" })
    }
    else
      alert("כל הפרטים נדרשים !")
  }

  sendTeamToPrint = (index1) => {
    let newTeam = this.props.teams.find(team => team.IdTeam === index1);
    this.props.history.push({
      pathname: '/team',
      state: { newTeam: newTeam }
    })
  }

  delTeam = (id) => {
    var obj = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    };
    fetch('http://localhost:53291/api/del/' + id, obj)
      .then(response => response.json())
      .then(res => {
        this.props.getTeams()
        console.log(res)
      });
  }

  render() {
    console.log(this.props.teams);
    return (
      <div style={{ backgroundColor: 'lightcyan' }}>
        <NavWeb />
        <br />
        <center>
          <h1 style={{ color: 'lightseagreen', fontStyle: 'oblique', fontSize: 50 }}>קבוצות הליגה</h1>
        </center>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {this.props.teams.map((team, index) =>
            <div index={team.IdTeam} style={{ textAlign: 'center', marginTop: '5%', padding: '2%' }}>
              <img style={{ cursor: 'pointer' }} index={team.IdTeam} src={team.ImgClub} alt="stam" width="300" height="225"
                onClick={() => this.sendTeamToPrint(team.IdTeam)} />
              <b><p style={{ fontStyle: 'oblique', fontSize: 20 }} index={team.IdTeam}> {team.ClubName} </p></b>
              <Button variant="danger" style={{ fontWeight: 'normal'}}onClick={() => this.delTeam(team.IdTeam)}>מחק קבוצה</Button>
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

            <Form style={{ width: '70%', fontWeight: 'bold' }}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label >שם הקבוצה</Form.Label>
                  <Form.Control type="text" value={this.state.club}
                    onChange={e => this.setState({ club: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>סמל הקבוצה</Form.Label>
                  <Form.Control type="text" value={this.state.imgClub}
                    onChange={e => this.setState({ imgClub: e.target.value })} />
                  <Form.Text className="text-muted">
                    (לינק תמונה של סמל הקבוצה)
                  </Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Label>הכנס את רשימת השחקנים</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress0">
                  <Form.Label>שם קבוצה</Form.Label>
                  <Form.Control type="text" value={this.state.club}
                    onChange={e => this.setState({ club: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>שם השחקן</Form.Label>
                  <Form.Control type="text" value={this.state.playerName}
                    onChange={e => this.setState({ playerName: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>גיל</Form.Label>
                  <Form.Control type="number" value={this.state.age}
                    onChange={e => this.setState({ age: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress3">
                  <Form.Label>מספר חולצה</Form.Label>
                  <Form.Control type="shirt_number" value={this.state.shirt_num}
                    onChange={e => this.setState({ shirt_num: e.target.value })} />
                </Form.Group>

              </Form.Row>
              <Form.Group>
                <Button variant="outline-dark" onClick={this.addPlayer} >הוספת שחקן</Button>
              </Form.Group> <br />

              <Form.Group>
                <Form.Label>מידע אודות הקבוצה</Form.Label>
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