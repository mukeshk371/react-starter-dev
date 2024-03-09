import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Button,
  Dropdown,
} from "react-bootstrap";

const EcommercePage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="cart-dropdown">
                  Cart{" "}
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
                    {cartItems.length}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="end-0" style={{left: 'initial'}}>
                  {cartItems.map((item, index) => (
                    <Dropdown.Item key={index}>{item} - ₹210</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h2>Products</h2>
        <div className="row">
          {[...Array(6).keys()].map((index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://via.placeholder.com/300x200?text=Product${
                    index + 1
                  }`}
                />
                <Card.Body>
                  <Card.Title>Product {index + 1}</Card.Title>
                  <Card.Text>Price: ₹210</Card.Text>
                  <Button onClick={() => addToCart(`Product ${index + 1}`)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default EcommercePage;
