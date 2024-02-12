import React, { useState } from "react";
import { scientists } from "../../utils/mockData";
import { ArrowLeft, ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Button, Card } from "react-bootstrap";

const ScientistCard = ({ scientist, onClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card className="w-25" onClick={() => onClick(scientist)}>
      <Card.Img src={scientist.image} alt={scientist.name} />
      <Card.Body>
        <Card.Title>{scientist.name}</Card.Title>
        <Card.Text>Field: {scientist.field}</Card.Text>
        <Card.Text>Birthdate: {scientist.birthdate}</Card.Text>
        <Button variant="primary" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        {showDetails && <Card.Text>{scientist.description}</Card.Text>}
      </Card.Body>
    </Card>
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
      <Button onClick={goToPrevious} variant="outline-success" className="mx-3 d-flex align-items-center">
        <ChevronLeft />
      </Button>
      <ScientistCard scientist={scientists[currentIndex]} onClick={onClick} />
      <Button onClick={goToNext} variant="outline-success" className="mx-3 d-flex align-items-center">
        <ChevronRight />
      </Button>
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
            <Button
              onClick={handleBack}
              className="position-absolute top-50 translate-middle-y d-flex align-items-center"
              variant="primary"
            >
              <ArrowLeft />{" "}
              <span className="ms-2 d-block">Back to Card View</span>
            </Button>
            <h1 className="text-center">Indian Scientists Carousel</h1>
          </div>

          <div className="p-2">
            <img
              src={selectedScientist.image}
              className="w-25"
              alt={selectedScientist.name}
            />
            <h2>{selectedScientist.name}</h2>
            <strong className="d-block">
              Field: {selectedScientist.field}
            </strong>
            <strong className="d-block">
              Birthdate: {selectedScientist.birthdate}
            </strong>
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
