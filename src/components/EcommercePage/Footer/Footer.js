import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center text-lg-start">
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column">
            <h5>E-commerce Company</h5>
            <Link to="/about-us" className="text-light mt-2">About Us</Link>
            <Link to="/contact-us" className="text-light mt-2">Contact Us</Link>
          </Col>
          <Col md={6} className="d-flex flex-column mt-4 mt-lg-0">
            <h5>Useful Links</h5>
            <Link to="/privacy-policy" className="text-light mt-2">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-light mt-2">Terms of Service</Link>
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
