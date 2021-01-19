import React, { Component } from 'react';
import NavWeb from './Nav';
import '../index.css';
import { Button, Collapse, Form, Col } from 'react-bootstrap/';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      club: "",
      imgClub: "",
      players: [],
      playerName:"",
      age:0
    }
  }
  setOpen = () => {
    this.setState({ open: !this.state.open })
  }

  addPlayer=()=>{
    let player={name:this.state.playerName, age:this.state.age}
    this.setState({players: [...this.state.players,player],playerName:"",age:""})

  }

  sendTeamToParent=()=>{
    this.props.sendToParent({club:this.state.club,imgClub:this.state.imgClub,players:this.state.players})
  }
  render() {
    console.log(this.state.club);
    console.log(this.state.age);
    console.log(this.state.players);
    return (
      <div>
        <center>
          <NavWeb />
          <h1>קבוצות הליגה</h1>
        </center>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {this.props.teams.map((team, index) => {
            return <div index={index} style={{ textAlign: 'center', marginTop: '5%', padding: '2%' }}>
              <img index={index} src={team.imgClub} alt="stam" width="300" height="200" />
              <p> {team.club} </p>


            </div>
          })}
        </div>
        <center>
          <Button onClick={this.setOpen}
            aria-controls="example-collapse-text"
            aria-expanded={this.state.open}
          >הוסף קבוצה</Button>

          <Collapse in={this.state.open}>

            <Form style={{width:'70%'}}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label >שם קבוצה</Form.Label>
                  <Form.Control type="text" value={this.state.club}
                    onChange={e => this.setState({ club: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>סמל הקבוצה</Form.Label>
                  <Form.Control type="text"  value={this.state.imgClub}
                    onChange={e => this.setState({ imgClub: e.target.value })}/>
                  <Form.Text className="text-muted">
                    Please enter a link for image
                  </Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Label>הכנס רשימת שחקנים</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>שם שחקן</Form.Label>
                  <Form.Control type="text" value={this.state.playerName}
                    onChange={e => this.setState({ playerName: e.target.value })}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>גיל</Form.Label>
                  <Form.Control type="number" value={this.state.age}
                    onChange={e => this.setState({ age: e.target.value })} />
                </Form.Group>
                
              </Form.Row>
              <Form.Group>
              <Button onClick={this.addPlayer} variant="secondary">הוספת שחקן</Button>
              </Form.Group> <br/>
              <Button variant="primary" onClick={this.sendTeamToParent}>
               אשר
               </Button>
            </Form>

          </Collapse>
        </center>


      </div>
    );
  }
}

export default Teams;