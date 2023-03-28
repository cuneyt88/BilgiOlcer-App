import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../helpers/img/BilgiÖlçer-resize.png"

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/"> <img className='photo' src={logo} alt="" /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">ANASAYFA</Nav.Link>
            <NavDropdown title="Sınıflar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/classes">9.Sınıf</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/classes">
              10.Sınıf
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/classes">
              11.Sınıf
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/classes">
              12.Sınıf
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">HAKKIMIZDA</Nav.Link>     
            <Nav.Link href="./Contact">
              İLETİŞİM
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header