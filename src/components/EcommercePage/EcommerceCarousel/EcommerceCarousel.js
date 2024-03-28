import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { EcommerceCarouselStyles } from "./Styles";
import { Link } from "react-router-dom";

function EcommerceCarousel() {
  const [carouselDetails, setCarouselDetails] = useState([]);

  const imgCdn =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.446009&lng=77.065463&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        const restaurantDetails =
          data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.map(
            (restaurant) => {
              return {
                imageUrl: imgCdn + restaurant.info.cloudinaryImageId,
                name: restaurant.info.name,
                cuisines: restaurant.info.cuisines.join(", "),
                address: restaurant.info.locality,
                id: restaurant.info.id,
              };
            }
          );
        setCarouselDetails(restaurantDetails);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <EcommerceCarouselStyles>
      <Carousel >
        {carouselDetails.map((restaurant, index) => (
          <Carousel.Item key={index} interval={5000}>
            <img
              className="d-block w-100 object-fit-cover"
              src={restaurant.imageUrl}
              alt={`${restaurant.name} Pic`}
            />
            <Carousel.Caption className="p-2">
              <Link
                to={`/restaurant/${restaurant.id}`}
                className="text-decoration-none text-light"
              >
                <h1 className="fs-3 fs-lg-2">{restaurant.name}</h1>
                <h3 className="fs-5">{restaurant.address}</h3>
                <h6 className="fst-italic text-truncate">Cuisines: {restaurant.cuisines}</h6>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </EcommerceCarouselStyles>
  );
}

export default EcommerceCarousel;
