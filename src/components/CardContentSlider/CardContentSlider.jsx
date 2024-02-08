import React, { useState } from "react";
import { scientists } from "../../utils/mockData";

const ScientistCard = ({ scientist }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="card w-25">
        <img
          src={scientist.image}
          className="card-img-top"
          alt={scientist.name}
        />
        <div className="card-body">
          <h5 className="card-title">{scientist.name}</h5>
          <p className="card-text">Field: {scientist.field}</p>
          <p className="card-text">Birthdate: {scientist.birthdate}</p>
          <p className="card-text">{scientist.description}</p>
        </div>
      </div>
    </div>
  );
};

const CardContentSlider = ({ scientists }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scientists.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? scientists.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <button onClick={goToPrevious} className="btn btn-primary m-2">
        Previous
      </button>
      <button onClick={goToNext} className="btn btn-success m-2">
        Next
      </button>
      <ScientistCard scientist={scientists[currentIndex]} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Indian Scientists Carousel</h1>
      <CardContentSlider scientists={scientists} />
    </div>
  );
};

export default App;
