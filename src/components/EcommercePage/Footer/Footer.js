import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column">
            <h5>E-commerce Company</h5>
            <Link to="/about-us" className="text-light">About Us</Link>
            <Link to="/contact-us" className="text-light">Contact Us</Link>
          </Col>
          <Col md={6}>
            <h5>Useful Links</h5>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p className="m-0">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
