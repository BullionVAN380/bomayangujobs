import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/boma.png';



const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-success">
        <img src={Logo} alt="logo" style={{ width: '70px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Toggle for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center navigation links */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/community" className="text-dark">
              Community
            </Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="text-dark">
              Jobs
            </Nav.Link>
            <Nav.Link as={Link} to="/companies" className="text-dark">
              Companies
            </Nav.Link>
            <Nav.Link as={Link} to="/salaries" className="text-dark">
              Salaries
            </Nav.Link>
            <Nav.Link as={Link} to="/employers" className="text-dark">
              For Employers
            </Nav.Link>
          </Nav>

          {/* Sign In Button on the right */}
          <Button variant="dark" className="fw-bold px-4">
            <i className="bi bi-box-arrow-in-right"></i> Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
