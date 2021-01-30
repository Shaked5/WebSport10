import React, { Component } from 'react'
import NavWeb from './Nav';
import Carousel from 'react-bootstrap/Carousel';
import '../CSSWeb/home.css'
import { Card, Button, DropdownButton, Dropdown } from 'react-bootstrap/';
import rokaviza from '../images/rokaviza.jpg';
import coach from '../images/1067598.jpg'
import card1 from '../images/1067766.jpg'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsFromLocalstorage: JSON.parse(localStorage.getItem('teams')),
      teamA: '',
      teamB: ''
    }
  }


  render() {
    console.log(this.state.teamA)
    console.log(this.state.teamB)
    return (
      <div>
        <NavWeb />
        <center>
          <h3>ברוכים הבאים לספורט 10</h3>
          <Carousel style={{ marginTop: 20, marginBottom: 15 }}>
            <Carousel.Item>
              <img
                width="1300" height="300"
                src="https://pbs.twimg.com/media/DtWJbzjWsAM8N7f.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>ברוכים הבאים</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="1300" height="300"
                src="https://images.one.co.il/images/d/dmain/ms/gg1442221.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>לאתר</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="1300" height="300"
                src="https://www.amigo.co.il/wp-content/uploads/2017/09/-%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99-2-e1506932783533-600x400.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>הטוב במדינה!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </center>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5%', textAlign: 'right', backgroundColor: 'rgba(117, 133, 145, 0.1)' }}>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rokaviza} width='150px' height='130px' />
            <Card.Body>
              <Card.Title>לצד סון: רוקאביצה בין נבחרי העונה באסיה</Card.Title>
              <Card.Text>
                <a href="https://www.sport5.co.il/articles.aspx?FolderID=64&docID=358566">לכתבה לחץ כאן</a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card1} width='150px' height='130px' />
            <Card.Body>
              <Card.Title>מצעד ההעברות הגדולות של ינואר</Card.Title>
              <Card.Text>
                <a href="https://www.sport5.co.il/articles.aspx?FolderID=64&docID=358545">לכתבה לחץ כאן</a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={coach} width='150px' height='130px' />
            <Card.Body>
              <Card.Title>המאמנים שנמצאים בסכנת הרחקה</Card.Title>
              <Card.Text>
                <a href="https://www.sport5.co.il/articles.aspx?FolderID=64&docID=358475">לכתבה לחץ כאן</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;