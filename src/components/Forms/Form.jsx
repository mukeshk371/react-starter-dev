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
    <div className="d-flex justify-content-center">
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
          className="form-control"
        />
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Add to paragraph
        </button>
        <button className="btn btn-success" onClick={handleClearClick}>
          Clear
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>{displayedValue}</p>
      </div>
    </div>
  );
};

export default Form;
