import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../logo.svg";

const NavBar = () => {
  const navStyle = {
    height: "62px"
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={navStyle} id="header">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} className="App-logo" alt="Logo" height="30" />
            <strong className="ms-2">React Starter Dev</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/form">
                  Form
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/card-content-slider-app">
                  Card Content Slider App
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/custom-tab">
                  Custom Tab
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
