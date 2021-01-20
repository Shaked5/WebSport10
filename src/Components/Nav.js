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
                    <Navbar.Brand href="/">דף הבית</Navbar.Brand>
                    <Nav.Link href="/teams">קבוצות</Nav.Link>
                    <Nav.Link href="/table">טבלת ניקוד</Nav.Link>
                    <Nav.Link href="/store">חנות</Nav.Link>
                    <Nav.Item style={{marginRight: '15%'}}><a href="/"> <img width="40%" height="40%" src={iconNav}></img> </a></Nav.Item>
                </Navbar>
            </div>
        );
    }
}

export default NavWeb;