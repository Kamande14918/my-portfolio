import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Me</h5>
            <p>A short bio or description goes here.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#hero" className="text-light">Home</a></li>
              <li><a href="#skills" className="text-light">Skills</a></li>
              <li><a href="#projects" className="text-light">Projects</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
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
            <small>&copy; {new Date().getFullYear()} Kennedy Kamande. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
