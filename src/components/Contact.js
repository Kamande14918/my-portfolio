import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    // Validate form fields
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Process form data (e.g., send an email)
      setSubmitted(true);
    }
    setValidated(true);
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="mb-4">Contact Me</h2>
        {submitted && <Alert variant="success">Thank you for your message!</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="contactName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your name" />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="contactEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter your email" />
            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="contactMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control required as="textarea" rows={3} placeholder="Your message" />
            <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
