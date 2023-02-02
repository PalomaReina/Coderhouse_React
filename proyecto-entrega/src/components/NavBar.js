import React, { Component } from 'react';
import { Navbar, Nav , Container} from 'react-bootstrap';

export default class NavBar extends Component{
  render(){
      return(
          <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">La tienda de Oak!</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/pokebolas">Pokebolas</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>
    )
  }
}

