import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../CSSWeb/navweb.css';
import iconNav from '../images/newIcon.png';
import { Link } from 'react-router-dom'

class NavWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="flex-container">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Nav.Link><Link to="/">דף הבית</Link></Nav.Link>
          <Nav.Link><Link to="/teams">קבוצות הליגה</Link></Nav.Link>
          <Nav.Link><Link to="/table">טבלת דירוג </Link></Nav.Link>
          <Nav.Link><Link to="/store">חנות האוהדים</Link></Nav.Link>
          <Nav.Item style={{ marginRight: '15%' }}><Link to="/"><img width="40%" src={iconNav}></img></Link></Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default NavWeb;