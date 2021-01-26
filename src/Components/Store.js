import React, { Component } from 'react'
import NavWeb from './Nav';
import { withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap/';
import '../index.css';
import '../CSSWeb/Store.css'
import cart from '../images/cart.png';
import ball_mc_pt from '../images/shop/ball_mc_pt.jpg';
import tezif_mc_pt from '../images/shop/tezif_mc_pt.jpg'
import shirt_mc_pt from '../images/shop/shirt_mc_pt.jpg';
import hat_mc_pt from '../images/shop/hat_mc_pt.jpg';

import tezif_mc_tlv from '../images/shop/tezif_mc_tlv.jpg';
import ball_mc_tlv from '../images/shop/ball_mc_tlv.jpg';
import shirt_mc_tlv from '../images/shop/shirt_mc_tlv.jpg';
import hat_mc_tlv from '../images/shop/hat_mc_tlv.jpg';

import tezif_mc_haifa from '../images/shop/tezif_mc_haifa.jpg';
import ball_mc_haifa from '../images/shop/ball_mc_haifa.jpg';
import shirt_mc_haifa from '../images/shop/shirt_mc_haifa.jpg';
import hat_mc_haifa from '../images/shop/hat_mc_haifa.jpg';

import tezif_btr from '../images/shop/tezif_btr.jpeg';
import ball_btr from '../images/shop/ball_btr.jpeg';
import shirt_btr from '../images/shop/shirt_btr.jpeg';
import hat_btr from '../images/shop/hat_btr.jpeg';

import tezif_hp_sheva from '../images/shop/tezif_hp_sheva.jpg';
import ball_hp_sheva from '../images/shop/ball_hp_sheva.jpeg';
import shirt_hp_sheva from '../images/shop/shirt_hp_sheva.jpeg';
import hat_hp_sheva from '../images/shop/hat_hp_sheva.jpeg';
class StoreTeams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team_name: '',
            src: cart
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
            <div><img className="cart" src={cart} /></div>
            <div style={{ textAlign: 'right' }}>
                <b>חיפוש חנות על פי שם קבוצה :</b> <input style={{height: '28px'}} type="text" onChange={this.inputTeam} /> <Button variant="outline-info" size="sm" onClick={this.searchButton}>חפש</Button>
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