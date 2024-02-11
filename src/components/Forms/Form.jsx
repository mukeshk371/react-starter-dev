import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleButtonClick = () => {
    if (inputValue.trim() === "") {
      setError("Please enter a value");
    } else {
      setDisplayedValue(inputValue);
      setInputValue("");
      setError("");
    }
  };

  const handleClearClick = () => {
    setDisplayedValue("");
    setInputValue("");
    setError("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a value"
            className="form-control mb-2"
          />
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary mb-2" onClick={handleButtonClick}>
            Add to paragraph
          </button>
          <button
            className="btn btn-success mb-2 mx-2"
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
      </div>
      {error && <p className="text-danger">{error}</p>}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p>{displayedValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
