import React, { Component } from 'react';
import NavWeb from './Nav';
import '../index.css';
import { Button, Collapse, Form, Col } from 'react-bootstrap/';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  setOpen = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
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

            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>שם קבוצה</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

              </Form.Row>

              <Button variant="primary" type="submit">
                Submit
               </Button>
            </Form>

          </Collapse>
        </center>


      </div>
    );
  }
}

export default Teams;