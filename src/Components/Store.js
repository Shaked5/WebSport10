import React, { Component } from 'react'
import NavWeb from './Nav';
import ScrollToTop from './ScrollToTop ';
import { withRouter } from 'react-router-dom';
import { Card, Button, Modal, Alert } from 'react-bootstrap/';
import { Cart } from 'react-bootstrap-icons';
import '../CSSWeb/Store.css'

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


  sendItemToCart = (id) => {
    this.props.addToCart(id)
  }

  HandleConfirmOrder = () => {
    this.props.ConfirmOrder()
  }

  RemoveItem = (id) => {
    this.props.RemoveItem(id)
  }

  handleIncrement = (id) => {
    this.props.handleIncrement(id)
  }
  handleDecrement = (id) => {
    this.props.handleDecrement(id)
  }

  render() {
    return (
      <div style={{ backgroundColor: 'rgba(178, 169, 155, 0.4)' }}>
        <NavWeb />
        <h2 style={{ textAlign: 'center', color: 'lightseagreen', fontStyle: 'oblique', fontSize: 50 }}>חנות האוהדים</h2>
        <br />
        <div>
          <>
            <Button variant="transpert" onClick={this.SetModalShow}>
              <span style={{ color: 'red', fontSize: '1rem', fontWeight: 'bold', marginLeft: 75 }}>{this.props.cartItems.length}</span>
              <Cart size='sm' style={{ position: 'absolute', top: '', left: '10%', size: 'sm' }} className="cart" />
            </Button>
            
            <Modal
              show={this.state.modalShow}
              onHide={this.SetCloseModal}
              backdrop="static"
              keyboard={false}
            >
              <div style={{ backgroundColor: 'rgba(117, 133, 145, 0.1)' }}>
                <Modal.Header >
                  <Modal.Title>סל הקניות</Modal.Title>
                  <Button size="sm" variant="secondary" onClick={this.SetCloseModal}>X</Button>
                </Modal.Header>
                <Modal.Body >
                  <div>
                    {this.props.cartItems.map((item, index) => {
                      return <div key={index}>
                        <p style={{ textAlign: 'right' }}>
                          <img width="11%" height="3%" src={item.src}></img><br />
                          <b style={{ marginLeft: 20 }}>
                            שם מוצר: {item.prod} <br />
                          מחיר הפריט: ₪{item.cost}<br />
                          כמות: {item.quantity}
                          </b>
                          <Button className="btn btn-sm m-4" variant="danger"
                            onClick={() => this.RemoveItem(item.id)}>הסר פריט</Button></p>
                      </div>
                    })}
                  </div>
                  <b><p>סכום לתשלום: {this.props.total_price}₪ </p></b>
                </Modal.Body>
                <Modal.Footer >
                  <Button variant="success" onClick={this.HandleConfirmOrder}>לתשלום</Button><br /><br />
                  <Alert id="su" variant="success" style={{ display: 'none', textAlign: 'center' }} />
                  <Alert id="wr" variant="danger" style={{ display: 'none', textAlign: 'center' }} />
                </Modal.Footer>
              </div>
            </Modal>
          </>
        </div>
        <div style={{ textAlign: 'right', marginRight: '3%', fontSize: 20 }}>
          <b>חיפוש מוצר על פי שם קבוצה :</b> <input style={{ height: '28px' }} type="text" onChange={this.inputTeam} />
        </div>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: 20, }}>
            {this.state.searchInput === '' && this.props.items.map((item, index) =>
              <Card style={{ width: '15rem', marginLeft: '3rem', textAlign: 'center', marginBottom: '5rem' }} key={index}>
                <Card.Body>
                  <Card.Img variant="top" src={item.src} height="200" />
                  <Card.Title>{item.prod}</Card.Title>
                  <Card.Text><b>₪{item.cost} ש"ח<br />
                    <Button variant='transpert' size='sm' onClick={() => this.handleIncrement(item.id)}><b>+</b></Button>
                    {item.quantity}
                    <Button variant='transpert' size='sm' onClick={() => this.handleDecrement(item.id)}><b>-</b></Button></b>
                  </Card.Text>
                  <Button variant="success" onClick={() => this.sendItemToCart(item.id)}>הוסף לסל</Button>
                </Card.Body>
              </Card>
            )}
            {this.state.searchInput !== '' && this.props.items.filter(item => item.team_name.includes(this.state.searchInput)).map((item, index) => {
              return <Card style={{ width: '15rem', marginLeft: '3rem', textAlign: 'center', marginBottom: '5rem' }} key={item.id}>
                <Card.Body>
                  <Card.Img variant="top" src={item.src} height="200" />
                  <Card.Title>{item.prod}</Card.Title>
                  <Card.Text><b>₪{item.cost} ש"ח <br />
                    <Button variant='transpert' size='sm' onClick={() => this.handleIncrement(item.id)}><b>+</b></Button>
                    {item.quantity}
                    <Button variant='transpert' size='sm' onClick={() => this.handleDecrement(item.id)}><b>-</b></Button></b>
                  </Card.Text>
                  <Button variant="success" onClick={() => this.sendItemToCart(item.id)}>הוסף לסל</Button>
                </Card.Body>
              </Card>
            })}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <ScrollToTop />
        </div>
      </div>);
  }
}


export default withRouter(StoreTeams);