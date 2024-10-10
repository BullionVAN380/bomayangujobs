import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/boma.png';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded} className="py-3 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-success">
          <img src={Logo} alt="logo" style={{ width: '70px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Toggle for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {expanded ? (
            <span>&#x2715;</span> // This is the 'X' icon when the drawer is open
          ) : (
            <span>&#9776;</span> // This is the default hamburger icon
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center navigation links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="text-dark" onClick={handleClose}>
             Home
            </Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="text-dark" onClick={handleClose}>
              Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="text-dark" onClick={handleClose}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/trainer" className="text-dark" onClick={handleClose}>
              Trainers
            </Nav.Link>
            <Nav.Link as={Link} to="/workers" className="text-dark" onClick={handleClose}>
              Workers
            </Nav.Link>
          </Nav>

          {/* Sign In Button on the right */}
          <Button variant="dark" className="fw-bold px-4" onClick={handleClose}>
            <i className="bi bi-box-arrow-in-right"></i> Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
