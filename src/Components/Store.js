import React, { Component } from 'react'
import NavWeb from './Nav';
import { withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap/';
import '../index.css';
import '../CSSWeb/Store.css'
class StoreTeams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team_name: ''
        }
    }

    inputTeam = (e) => {
        this.setState({ team_name: e.target.value });
    }

    searchButton = () => {
        alert("searching....")
    }

    render() {
        return (<div>
            <NavWeb />
            <br />
            <div style={{ textAlign: 'right' }}>
                <b>חיפוש חנות על פי שם קבוצה :</b> <input type="text" onChange={this.inputTeam} /> <Button variant="outline-info" size="sm" onClick={this.searchButton}>חפש</Button>
            </div>
            <h2 style={{ textAlign: 'center' }}>חנות המועדון</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', }}>
                <Card className="card-store" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>צעיף</Card.Title>
                        <Card.Text>
                            30 ש''ח
                    </Card.Text>
                        <Button variant="success">הוסף לעגלה</Button>
                    </Card.Body>
                </Card>
                <Card className="card-store" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>כובע</Card.Title>
                        <Card.Text>
                            30 ש"ח
                        </Card.Text>
                        <Button variant="success">הוסף לעגלה</Button>
                    </Card.Body>
                </Card>
                <Card className="card-store" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>קפוצ'ון</Card.Title>
                        <Card.Text>
                            50 ש"ח
                        </Card.Text>
                        <Button variant="success">הוסף לעגלה</Button>
                    </Card.Body>
                </Card>
                <Card className="card-store" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>כובע טמבל</Card.Title>
                        <Card.Text>
                            35 ש"ח
                        </Card.Text>
                        <Button variant="success">הוסף לעגלה</Button>
                    </Card.Body>
                </Card>
                <Card className="card-store" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>מטריה</Card.Title>
                        <Card.Text>
                            40 ש"ח
                        </Card.Text>
                        <Button variant="success">הוסף לעגלה</Button>
                    </Card.Body>
                </Card>
                <Card className="card-store" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>מסכה</Card.Title>
                        <Card.Text>
                            25 ש"ח
                        </Card.Text>
                        <Button variant="success">הוסף לעגלה</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>);
    }
}

export default withRouter(StoreTeams);