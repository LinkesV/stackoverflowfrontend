import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/userSlice';

function Navigation() {
  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    dispatch(logOut())
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">StackOverFlow Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/userprofile'>UserProfile</Nav.Link>
            <Nav.Link href='/company'>Company</Nav.Link>
            <Nav.Link herf='/' onClick={logoutHandler}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation