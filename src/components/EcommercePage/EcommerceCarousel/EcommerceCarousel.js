import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

function EcommerceCarousel() {
    const [images, setImages] = useState([]);

    const imgCdn = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

    useEffect(() => {
        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.446009&lng=77.065463&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            .then(response => response.json())
            .then(data => {
                const restaurantImages = data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants.map(restaurant => imgCdn + restaurant.info.cloudinaryImageId);
                setImages(restaurantImages);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Carousel>
            {images.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 object-fit-cover"
                        src={imageUrl}
                        alt={`Slide ${index}`}
                        height="400px"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default EcommerceCarousel;
