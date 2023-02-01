import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
  
export default class NavBar extends Component {
  render() {
    return (
    <Router>
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">La Tienda de Oak!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/pokebolas"}>Pokebolas</Nav.Link>
            <Nav.Link href="#link">item2</Nav.Link>
            <Nav.Link href="#link">item3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </Router>
    );
  };
};
