import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Me</h5>
            <p className="mb-2">
              <strong>Kennedy Kamau Kamande</strong>
            </p>
            <p className="mb-3">
              Passionate Electronic & Computer Engineering student at JKUAT, specializing in full-stack development and AI integration.
            </p>
            <p className="mb-0">
              Building innovative solutions at the intersection of hardware, software, and artificial intelligence.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/skills" className="text-light text-decoration-none">Skills</Link></li>
              <li><Link to="/projects" className="text-light text-decoration-none">Projects</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
              <li><a href="https://github.com/Kamande14918" className="text-light">GitHub</a></li>
              <li><a href="http://www.linkedin.com/in/kennedy-kamande-100a78216" className="text-light">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <small>&copy; {new Date().getFullYear()} Kennedy Kamande. Build with curiosity and caffeine ☕.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
