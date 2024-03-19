import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Table,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import { Cart, Cart3, CartFill, DashLg, PersonCircle, PlusLg } from "react-bootstrap-icons";
import { filterData } from "../../utils/filterData";
import logo from "../../logo.svg";
import CartPage from "./CartPage/CartPage";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";

const EcommercePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.446009&lng=77.065463&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  useEffect(() => {
    let filtered = restaurants;
    if (selectedCuisine && !searchQuery) {
      filtered = restaurants.filter((restaurant) =>
        restaurant.info.cuisines.includes(selectedCuisine)
      );
    } else if (searchQuery) {
      filtered = restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredRestaurants(filtered);
  }, [restaurants, selectedCuisine, searchQuery]);

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

  const filterByCuisine = (cuisine) => {
    setSelectedCuisine(cuisine);
  };

  const allCuisines = [...new Set(filterData.map((item) => item.action.text))]; // Use mock data array for cuisines

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="position-sticky top-0 start-0 z-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} className="App-logo" alt="Logo" height="30" />
            <strong className="fs-2">E-commerce</strong>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <Form className="d-flex align-items-center" inline>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form>
            </Nav.Link>
            <Nav.Link href="#">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="d-inline-flex align-items-center fw-bold">
                  <PersonCircle className="me-2" /> {loggedInUser ? loggedInUser : "Profile"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {loggedInUser ? (
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  ) : (
                    <Dropdown.Item onClick={() => setShowLogin(true)}>Login</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link href="#cart">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="cart-dropdown"
                  className="d-flex align-items-center"
                >
                  <Cart className="me-2" />
                  <strong>Cart</strong>{" "}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {cartItems.length}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="end-0 p-0 overflow-auto shadow-lg bg-body-tertiary rounded"
                  style={{
                    left: "initial",
                    width: "max-content",
                    maxHeight: "350px",
                  }}
                >
                  <Table
                    bordered
                    hover
                    style={{ verticalAlign: "middle" }}
                    className="mb-0"
                  >
                    <thead className="position-sticky top-0 shadow table-info">
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
                              className="w-50 d-inline-flex align-items-center"
                              onClick={() => removeFromCart(index)}
                            >
                              <DashLg />
                            </Button>
                            <Button
                              variant="success"
                              className="w-50 d-inline-flex align-items-center"
                              onClick={() => addToCart(index)}
                            >
                              <PlusLg />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="position-sticky bottom-0 table-info">
                      <tr>
                        <td colSpan={4} align="center">
                          <Button
                            variant="primary"
                            onClick={() => setShowCart(true)}
                            className="d-flex align-items-center"
                          >
                            <Cart3 className="me-2" /> Go To Cart
                          </Button>
                        </td>
                      </tr>
                    </tfoot>
                  </Table>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {showCart ? (
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        ) : (
          <>
            <ButtonGroup
              size="lg"
              aria-label="Basic example"
              className="overflow-auto mw-100 text-nowrap mb-2"
            >
              <Button variant="secondary" onClick={() => setSelectedCuisine()}>
                All
              </Button>
              {allCuisines.map((cuisine) => (
                <Button
                  variant="secondary"
                  key={cuisine}
                  onClick={() => filterByCuisine(cuisine)}
                >
                  {cuisine}
                </Button>
              ))}
            </ButtonGroup>
            <h2>Restaurants</h2>
            <div className="row">
              {filteredRestaurants.map((restaurant, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <Link to={`/restaurant/${restaurant.info.id}`} className="text-decoration-none">
                    <Card>
                      <Card.Img
                        className="object-fit-cover"
                        style={{ height: "200px" }}
                        variant="top"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                      />
                      <Card.Body>
                        <Card.Title className="text-truncate">
                          {restaurant.info.name}
                        </Card.Title>
                        <Card.Text>{restaurant.info.costForTwo}</Card.Text>
                        <p className="text-truncate">
                          {restaurant.info.cuisines.join(", ")}
                        </p>
                        {selectedItemIndex !== index && (
                          <Button
                            className="d-inline-flex align-items-center"
                            onClick={() => toggleSelection(index)}
                          >
                            <CartFill className="me-2" /> Add to Cart
                          </Button>
                        )}
                        {selectedItemIndex === index && (
                          <div className="row gap-3 m-0">
                            <Button
                              variant="outline-danger"
                              className="col d-inline-flex align-items-center justify-content-center"
                              onClick={() => removeFromCart(index)}
                            >
                              <DashLg />
                            </Button>
                            <Button
                              variant="outline-success"
                              className="col d-inline-flex align-items-center justify-content-center"
                              onClick={() => addToCart(index)}
                            >
                              <PlusLg />
                            </Button>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
      <LoginForm
        show={showLogin}
        handleClose={() => setShowLogin(false)}
        handleLogin={handleLogin}
      />
    </>
  );
};

export default EcommercePage;
