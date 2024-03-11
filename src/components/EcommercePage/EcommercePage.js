import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Button,
  Dropdown,
  Table,
} from "react-bootstrap";

const EcommercePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.106926&lng=85.357232&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        setRestaurants(
          data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        );
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  const addToCart = (index) => {
    setCartItems([...cartItems, restaurants[index]]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const toggleSelection = (index) => {
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="position-sticky top-0 start-0 z-3"
      >
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
                <Dropdown.Menu className="end-0 p-0 overflow-auto" style={{ left: "initial", width: "max-content", maxHeight: "450px" }}>
                  <Table bordered hover style={{ verticalAlign: "middle" }} className="mb-0 rounded">
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th>Restaurant</th>
                        <th>Price</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          <td className="text-center">{index + 1}.</td>
                          <td>{item.info.name}</td>
                          <td>{item.info.costForTwo}</td>
                          <td>
                            <Button
                              variant="danger"
                              className="w-50"
                              onClick={() => removeFromCart(index)}
                            >
                              -
                            </Button>
                            <Button
                              variant="success"
                              className="w-50"
                              onClick={() => addToCart(index)}
                            >
                              +
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h2>Restaurants</h2>
        <div className="row">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <Card>
                <Card.Img
                  className="object-fit-cover"
                  style={{ height: "200px" }}
                  variant="top"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    restaurant.info.cloudinaryImageId
                  }
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {restaurant.info.name}
                  </Card.Title>
                  <Card.Text>{restaurant.info.costForTwo}</Card.Text>
                  {selectedItemIndex !== index && (
                    <Button onClick={() => toggleSelection(index)}>
                      Add to Cart
                    </Button>
                  )}
                  {selectedItemIndex === index && (
                    <div className="row gap-3 m-0">
                      <Button
                        variant="outline-danger"
                        className="col"
                        onClick={() => removeFromCart(index)}
                      >
                        -
                      </Button>
                      <Button
                        variant="outline-success"
                        className="col"
                        onClick={() => addToCart(index)}
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
