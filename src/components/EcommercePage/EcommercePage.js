import React, { useState, useEffect } from "react";
import { Container, ButtonGroup, Button, Card } from "react-bootstrap";
import { CartFill, DashLg, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/filterData";
import CartPage from "./CartPage/CartPage";
import LoginForm from "./LoginForm/LoginForm";
import NavBar from "./NavBar/NavBar";

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
      <NavBar
        loggedInUser={loggedInUser}
        cartItems={cartItems}
        setSearchQuery={setSearchQuery}
        handleLogout={handleLogout}
        setShowLogin={setShowLogin}
        setShowCart={setShowCart}
        cartLength={cartItems.length}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
      />
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
