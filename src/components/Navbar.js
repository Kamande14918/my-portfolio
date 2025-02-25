import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const AppNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode by toggling CSS class on the body element
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mss-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="outline-secondary" onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;