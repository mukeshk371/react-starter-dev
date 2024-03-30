import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">About Us</h1>
      <Row className="mt-4">
        <Col md={6}>
          <h3>Our Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat libero vel nisi placerat, nec consectetur eros euismod.</p>
        </Col>
        <Col md={6}>
          <h3>Our Vision</h3>
          <p>Integer ut lectus ac ipsum tincidunt pharetra nec non arcu. Mauris at est ac tortor placerat consequat.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3>Our Team</h3>
          <p>Meet our amazing team of professionals dedicated to providing you with the best service.</p>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - COO</li>
            <li>Michael Johnson - CTO</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
