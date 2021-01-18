import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './navweb.css';


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
            <Nav.Link className="nav-div" href="#pricing">טבלת ניקוד</Nav.Link>
            <Nav.Link className="nav-div" href="#pricing">חנות</Nav.Link>
        
        </Navbar>
      </div>
    );
  }
}

export default NavWeb;