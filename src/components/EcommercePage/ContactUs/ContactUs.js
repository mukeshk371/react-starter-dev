import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Contact Us</h1>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Get in Touch</h3>
          <p>Have a question or need support? Fill out the form below and we'll get back to you as soon as possible.</p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Contact Information</h3>
          <p>Feel free to reach out to us using the information below:</p>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
