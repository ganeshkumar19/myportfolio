import React, { useState, useEffect } from 'react'
import {Container, Navbar, Nav, Offcanvas} from 'react-bootstrap'
import './Navbar.css'
import {Link} from 'react-scroll'
import { handleConnectWithMe } from '../../helpers/connectmail'



const NavbarComponent = () => {

  const [expanded, setExpanded] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => {
    // For mobile: open the offcanvas explicitly
    setShowOffcanvas(true);
  };

  const handleClose = () => {
    setExpanded(false);
    setShowOffcanvas(false);
  };

  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Ensure offcanvas/backdrop is closed when switching to md+
        setShowOffcanvas(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar expand="md" className='navbarcomp' expanded={expanded}>
    <Container fluid className='mx-2'>
      <Navbar.Brand href="#home" className='logo'>Ganesh<br></br>Kumar</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" className='navbar-toggler d-md-none' onClick={handleToggle}/>
      
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        className='custom-offcanvas d-md-none'
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
      >
        <Offcanvas.Header closeButton className='offcanvas-header'>
          <Offcanvas.Title id="offcanvasNavbarLabel" className='offcanvas-title'>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas-body'>
          <Nav className="nav-menu-mobile d-flex flex-column gap-4">
            <Nav.Item>
              <Link
                to="home"
                spy={true}
                offset={-70}
                duration={500}
                className="navlink-mobile"
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
                className="navlink-mobile"
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
                className="navlink-mobile"
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
                className="navlink-mobile"
                onClick={() => handleClose()}
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="contact"
                spy={true}
                offset={-70}
                duration={500}
                className="navlink-mobile"
                onClick={() => handleClose()}
              >
                Contact
              </Link>
            </Nav.Item>
            <div className='mobile-connect-btn mt-4'>
              <button className='cwmButton-mobile' onClick={() => { handleConnectWithMe(); setShowOffcanvas(false); }}>
                Connect With Me
              </button>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>

      <Nav className='nav-menu d-none d-md-flex align-items-center justify-content-between gap-3 mx-auto'>
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
            Projects
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
      
      <div className='d-flex justify-content-center align-items-center d-none d-md-block'>
        <button className='cwmButton d-flex justify-content-center align-items-center' onClick={handleConnectWithMe}>Connect With Me</button>
      </div>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent