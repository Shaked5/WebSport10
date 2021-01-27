import React, { Component } from 'react'
import NavWeb from './Nav';
import { withRouter } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap/';
import '../index.css';
import '../CSSWeb/Store.css'
import cart from '../images/cart.png';


class StoreTeams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            modalShow: false
        }
    }

    inputTeam = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    SetModalShow = () => {
        this.setState({ modalShow: true });
    }
    SetCloseModal = () => {
        this.setState({ modalShow: false })
    }


    sendItemToCart = (index) => {
        this.props.addToCart(index)
    }


    HandleConfirmOrder = () => {
        this.props.ConfirmOrder()
    }

    RemoveItem = (id) => {
        this.props.RemoveItem(id)
    }

    render() {
        console.log(this.state.searchInput)
        return (<div>
            <NavWeb />
            <br />
            <div>
                <>
                    <Button variant="btn-container secondary" onClick={this.SetModalShow}>
                        <span style={{ color: 'red', fontSize: '1rem', fontWeight: 'bold' }}>{this.props.cartItems.length}</span>
                        <img style={{ position: 'absolute',top: '' ,left: '5.8%' }} className="cart" src={cart} />
                    </Button>

                    <Modal
                        show={this.state.modalShow}
                        onHide={this.SetCloseModal}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header>
                            <Modal.Title>עגלת קניות</Modal.Title>
                            <Button variant="secondary" onClick={this.SetCloseModal}>X</Button>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                {this.props.cartItems.map((item, index) => {
                                    return <div key={index}>
                                        <p style={{ textAlign: 'right' }}>
                                            <b>שם מוצר: {item.prod}<br /> מחיר: ₪{item.cost} </b>
                                            <img width="11%" height="3%" src={item.src}></img>
                                            <Button className="btn btn-sm m-4" variant="danger"
                                                onClick={() => this.RemoveItem(item.id)}>-</Button></p>
                                    </div>
                                })}
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="success" onClick={this.HandleConfirmOrder}>לתשלום</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
            <div style={{ textAlign: 'right' }}>
                <b>חיפוש מוצר על פי שם קבוצה :</b> <input style={{ height: '28px' }} type="text" onChange={this.inputTeam} />
            </div>
            <h2 style={{ textAlign: 'center' }}>חנות המועדון</h2>
            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: 20, }}>
                    {this.state.searchInput === '' && this.props.items.map((item, index) =>
                        <Card style={{ width: '15rem', marginLeft: '3rem', textAlign: 'center', marginBottom: '5rem' }} key={index}>
                            <Card.Body>
                                <Card.Img variant="top" src={item.src} height="200" />
                                <Card.Title>{item.prod}</Card.Title>
                                <Card.Text><b>₪{item.cost} ש"ח</b></Card.Text>
                                <Button variant="success" onClick={() => this.sendItemToCart(index)}>הוסף לעגלה</Button>
                            </Card.Body>
                        </Card>
                    )}
                    {this.state.searchInput !== '' && this.props.items.filter(item => item.team_name.includes(this.state.searchInput)).map((item, index) => {
                        return <Card style={{ width: '15rem', marginLeft: '3rem', textAlign: 'center', marginBottom: '5rem' }} key={item.id}>
                            <Card.Body>
                                <Card.Img variant="top" src={item.src} height="200" />
                                <Card.Title>{item.prod}</Card.Title>
                                <Card.Text><b>₪{item.cost} ש"ח</b></Card.Text>
                                <Button variant="success" onClick={() => this.sendItemToCart(index)}>הוסף לעגלה</Button>
                            </Card.Body>
                        </Card>
                    })}
                </div>
            </div>
        </div>);
    }
}


export default withRouter(StoreTeams);