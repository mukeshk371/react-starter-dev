import React, { useState } from "react";
import { scientists } from "../../utils/mockData";
import { ArrowLeft, ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const ScientistCard = ({ scientist, onClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card w-25" onClick={() => onClick(scientist)}>
      <img
        src={scientist.image}
        className="card-img-top"
        alt={scientist.name}
      />
      <div className="card-body">
        <h5 className="card-title">{scientist.name}</h5>
        <p className="card-text">Field: {scientist.field}</p>
        <p className="card-text">Birthdate: {scientist.birthdate}</p>
        <button className="btn btn-primary" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails && <p className="card-text">{scientist.description}</p>}
      </div>
    </div>
  );
};

const CardContentSlider = ({ scientists, onClick }) => {
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
    <div className="d-flex align-items-center justify-content-center">
      <button
        onClick={goToPrevious}
        className="btn btn-lg py-3 btn-outline-success mx-3 d-flex align-items-center"
      >
        <ChevronLeft />
      </button>
      <ScientistCard scientist={scientists[currentIndex]} onClick={onClick} />
      <button
        onClick={goToNext}
        className="btn btn-lg py-3 btn-outline-success mx-3 d-flex align-items-center"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

const CardContentSliderApp = () => {
  const [selectedScientist, setSelectedScientist] = useState(null);

  const handleClick = (scientist) => {
    setSelectedScientist(scientist);
  };

  const handleBack = () => {
    setSelectedScientist(null);
  };

  return (
    <div>
      {selectedScientist ? (
        <div>
          <div className="position-relative px-2 py-1">
            <button
              onClick={handleBack}
              className="btn btn-primary d-flex align-items-center position-absolute top-50 translate-middle-y"
            >
              <ArrowLeft /> <span className="ms-2 d-block">Back to Card View</span>
            </button>
            <h1 className="text-center">Indian Scientists Carousel</h1>
            <span />
          </div>

          <div className="p-2">
            <img
              src={selectedScientist.image}
              className="w-25"
              alt={selectedScientist.name}
            />
            <h2>{selectedScientist.name}</h2>
            <strong className="d-block">Field: {selectedScientist.field}</strong>
            <strong className="d-block">Birthdate: {selectedScientist.birthdate}</strong>
            <p>Description: {selectedScientist.description}</p>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-center">Indian Scientists Carousel</h1>
          <CardContentSlider scientists={scientists} onClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default CardContentSliderApp;