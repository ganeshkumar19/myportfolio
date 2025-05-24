import React, { useState } from 'react'

import {Container, Navbar, Nav} from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-scroll';

const NavbarComponent = () => {

  const [expanded, setExpanded] = useState(false);


  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };
  return (
    <Navbar expand="md" className='navbarcomp' expanded={expanded}>
    <Container fluid className='mx-2'>
      <Navbar.Brand href="#home" className='logo'>Ganesh<br></br>Kumar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'grey'}} onClick={handleToggle}/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='nav-menu d-flex align-items-center justify-content-between gap-3 mx-auto'>
      <Nav.Item>
              <Link
                to="home"
                spy={true}
                offset={-70}
                duration={500}
                className="navlink"
                onClick={() => handleClose()}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="about"
                spy={true}
                offset={-70}
                duration={500}
                className="navlink"
                onClick={() => handleClose()}
              >
                About Me
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="services"
                spy={true}
                offset={-70}
                duration={500}
                className="navlink"
                onClick={() => handleClose()}
              >
                Services
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="portfolio"
                spy={true}
                offset={-70}
                duration={500}
                className="navlink"
                onClick={() => handleClose()}
              >
                Portfolio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="contact"
                spy={true}
                offset={-70}
                duration={500}
                className="navlink"
                onClick={() => handleClose()}
              >
                Contact
              </Link>
            </Nav.Item>
      </Nav>
      </Navbar.Collapse>
      <div className='d-flex justify-content-center align-items-center  d-none d-md-block'>
        <button className='cwmButton d-flex justify-content-center align-items-center'>Connect With Me</button>
      </div>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent