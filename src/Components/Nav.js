import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../CSSWeb/navweb.css';
import iconNav from '../images/newIcon.png';


class NavWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="flex-container">
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="nav-div" href="/">דף הבית</Navbar.Brand>
            <Nav.Link className="nav-div" href="/teams">קבוצות</Nav.Link>
            <Nav.Link className="nav-div" href="/table">טבלת ניקוד</Nav.Link>
            <Nav.Link className="nav-div" href="/store">חנות</Nav.Link>
            <Nav.Item className="icon-nav" ><a href="/"> <img width="90" height="30" src={iconNav}></img> </a></Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default NavWeb;