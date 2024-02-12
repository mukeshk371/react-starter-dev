import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const MyForm = () => {
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
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Control
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a value"
            className="mb-2"
          />
        </Col>
        <Col md={6}>
          <Button
            className="mb-2"
            onClick={handleButtonClick}
            variant="primary"
          >
            Add to paragraph
          </Button>
          <Button
            className="mb-2 mx-2"
            onClick={handleClearClick}
            variant="success"
          >
            Clear
          </Button>
        </Col>
      </Row>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row className="justify-content-center">
        <Col md={6}>
          <p>{displayedValue}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyForm;
