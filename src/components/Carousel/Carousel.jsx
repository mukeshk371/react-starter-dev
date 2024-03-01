import React, { useState } from 'react';
import { CarouselContainer, CarouselSlide, SlideImage, CarouselButton } from './styles';

const images = [
  'https://images2.alphacoders.com/105/1051995.jpg',
  'https://wallpapers.com/images/hd/thor-hammer-captain-america-laptop-52w0soyzy94o3t84.jpg',
  'https://c4.wallpaperflare.com/wallpaper/287/620/954/hulk-avengers-age-of-ultron-the-avengers-wallpaper-preview.jpg',
  'https://aiwalls.ai/wp-content/uploads/2023/12/alchemyrefiner_alchemymagic_0_a4054f66-9a97-4a19-93f7-be90b91a93f2_0.jpg',
  'https://wallpapercave.com/wp/wp2868528.jpg',
  'https://wallpapers.com/images/hd/thor-hollywood-movie-cds1dwi0pfs58szg.jpg',
];

const CarouselWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <CarouselContainer>
      <CarouselButton direction="prev" onClick={prevSlide}>Prev</CarouselButton>
      <CarouselSlide>
        {images.map((image, index) => (
          <SlideImage
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        ))}
      </CarouselSlide>
      <CarouselButton direction="next" onClick={nextSlide}>Next</CarouselButton>
    </CarouselContainer>
  );
};

export default function Carousel() {
  return (
    <div className="App">
      <h1>React Carousel Example</h1>
      <CarouselWrapper />
    </div>
  );
}
