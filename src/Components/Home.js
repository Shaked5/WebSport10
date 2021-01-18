import React, { Component } from 'react'
import NavWeb from './Nav';
import Carousel from 'react-bootstrap/Carousel';
import {Card , Button} from 'react-bootstrap/';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <NavWeb />
        <center>
        <Carousel style={{ marginTop:15,marginBottom:15 }}>
          <Carousel.Item>
            <img
              width="1100" height="300"
              src="https://pbs.twimg.com/media/DtWJbzjWsAM8N7f.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="1300" height="300"
              src="https://images.one.co.il/images/d/dmain/ms/gg1442221.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="1300" height="300"
              src="https://www.amigo.co.il/wp-content/uploads/2017/09/-%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99-2-e1506932783533-600x400.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </center>

        <div style={{display:'flex',justifyContent:'space-around',border:'1px solid black'}}>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
               </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>





      </div>
    );
  }
}

export default Home;