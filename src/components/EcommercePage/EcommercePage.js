import React, { useState } from "react";
import { Navbar, Container, Nav, Card, Button, Dropdown } from "react-bootstrap";

const EcommercePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  const toggleSelection = (index) => {
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="position-sticky top-0 start-0 z-3">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="cart-dropdown">
                  Cart{" "}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {cartItems.length}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="end-0" style={{ left: "initial" }}>
                  {cartItems.map((item, index) => (
                    <Dropdown.Item key={index}>
                      {item} - ₹210
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </Button>
                      <Button
                        variant="success"
                        className="ms-2"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>
                    </Dropdown.Item>
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
                  src={`https://via.placeholder.com/300x200?text=Product${index + 1}`}
                />
                <Card.Body>
                  <Card.Title>Product {index + 1}</Card.Title>
                  <Card.Text>Price: ₹210</Card.Text>
                  {selectedItemIndex !== index && (
                    <Button
                      onClick={() => toggleSelection(index)}
                    >
                      Add to Cart
                    </Button>
                  )}
                  {selectedItemIndex === index && (
                    <div className="row gap-3 m-0">
                      <Button
                        variant="outline-danger"
                        className="col"
                        onClick={() => removeFromCart(`Product ${index + 1}`)}
                      >
                        -
                      </Button>
                      <Button
                        variant="outline-success"
                        className="col"
                        onClick={() => addToCart(`Product ${index + 1}`)}
                      >
                        +
                      </Button>
                    </div>
                  )}
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
