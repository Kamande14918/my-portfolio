import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const AppNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Toggle dark mode by toggling CSS class on the body element
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Button variant="outline-secondary" onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;