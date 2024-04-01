import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { CartFill, DashLg, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/filterData";
import CartPage from "./CartPage/CartPage";
import LoginForm from "./LoginForm/LoginForm";
import NavBar from "./NavBar/NavBar";
import EcommerceCarousel from "./EcommerceCarousel/EcommerceCarousel";
import { EcommercePageStyles } from "./Styles";
import Footer from "./Footer/Footer";

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
  const [cityName, setCityName] = useState("");

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
        setCityName(data.data.cards[0].card.card.title);
        console.log(data);
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

  const allCuisines = [...new Set(filterData.map((item) => item.action.text))];

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <EcommercePageStyles>
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
      <div className="mt-0 mx-auto max-w-[1140px]">
        {showCart ? (
          <CartPage
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        ) : (
          <>
            <EcommerceCarousel />
            <ButtonGroup
              size="lg"
              aria-label="Basic example"
              className="overflow-auto mw-100 text-nowrap mb-2 mt-4 mt-lg-5"
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
            <h2>{cityName}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {filteredRestaurants.map((restaurant, index) => (
                <div key={index} className="shadow border-0 rounded-[8px] overflow-hidden">
                  <Link
                    to={{
                      pathname: `/restaurant/${restaurant.info.id}`,
                      state: { restaurantData: restaurant },
                    }}
                    className="text-decoration-none"
                  >
                    <img
                      className="h-[200px] w-full object-cover"
                      alt={restaurant.info.cloudinaryImageId}
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                    />
                  </Link>
                  <div className=" p-[15px]">
                    <Link
                      to={{
                        pathname: `/restaurant/${restaurant.info.id}`,
                        state: { restaurantData: restaurant },
                      }}
                      className="text-decoration-none text-dark"
                    >
                      <h4 className="text-ellipsis overflow-hidden whitespace-nowrap">
                        {restaurant.info.name}
                      </h4>
                    </Link>
                    <p>{restaurant.info.costForTwo}</p>
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                      {restaurant.info.cuisines.join(", ")}
                    </p>
                    {selectedItemIndex !== index && (
                      <button
                        className="d-inline-flex align-items-center bg-[#0d6efd] text-white rounded-md py-[5px] px-[10px]"
                        onClick={() => toggleSelection(index)}
                      >
                        <CartFill className="me-2" /> Add to Cart
                      </button>
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
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <LoginForm
        show={showLogin}
        handleClose={() => setShowLogin(false)}
        handleLogin={handleLogin}
      />
      <Footer />
    </EcommercePageStyles>
  );
};

export default EcommercePage;
