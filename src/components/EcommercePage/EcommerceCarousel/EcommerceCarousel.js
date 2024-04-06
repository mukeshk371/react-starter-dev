import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function EcommerceCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDetails, setCarouselDetails] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

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

    const id = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === carouselDetails.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    setIntervalId(id);

    return () => {
      clearInterval(intervalId);
    };
  }, [carouselDetails]);

  const handleDotClick = (index) => {
    setCarouselIndex(index);
    clearInterval(intervalId);
  };

  const handleNext = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === carouselDetails.length - 1 ? 0 : prevIndex + 1
    );
    clearInterval(intervalId);
  };

  const handlePrev = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === 0 ? carouselDetails.length - 1 : prevIndex - 1
    );
    clearInterval(intervalId);
  };

  return (
    <>
      <div className="carousel relative md:rounded-[10px] overflow-hidden">
        {carouselDetails.length > 0 && (
          <img
            className="object-cover w-full animate-fade-in-out h-[250px] md:h-[400px]"
            src={carouselDetails[carouselIndex].imageUrl}
            alt={`${carouselDetails[carouselIndex].name} Pic`}
          />
        )}
        <div className="carousel-dots absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {carouselDetails.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === carouselIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <div className="carousel-caption-bx p-2 bg-black bg-opacity-50 text-white w-full absolute bottom-0 left-0 text-center">
          <Link
            to={`/restaurant/${carouselDetails[carouselIndex]?.id}`}
            className="text-decoration-none text-white"
          >
            <h1 className="text-xl md:text-2xl">
              {carouselDetails[carouselIndex]?.name}
            </h1>
            <h3 className="text-xl">
              {carouselDetails[carouselIndex]?.address}
            </h3>
            <h6 className="italic truncate">
              Cuisines: {carouselDetails[carouselIndex]?.cuisines}
            </h6>
          </Link>
        </div>
        <button
          className="prev-btn absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-[30px] px-[15px] py-[10px] rounded-r-[5px]"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </button>
        <button
          className="next-btn absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-[30px] px-[15px] py-[10px] rounded-l-[5px]"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
}

export default EcommerceCarousel;
