import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container, Form } from "react-bootstrap";

const ColorChanger = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [customColor, setCustomColor] = useState("");
  const [palette, setPalette] = useState([
    "red",
    "green",
    "blue",
    "yellow",
    "aqua",
    "pink",
  ]);

  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [selectedColor]);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleColorChangeBtn = (color) => {
    setSelectedColor(color);
  };

  const addCustomColor = () => {
    if (customColor) {
      setPalette([...palette, customColor]);
      setCustomColor("");
    }
  };

  return (
    <Container>
      <h1>Choose a color:</h1>
      <Form.Select value={selectedColor} onChange={handleColorChange}>
        {palette.map((color) => (
          <option key={color} value={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </option>
        ))}
      </Form.Select>
      <div className="d-flex align-items-center justify-content-center py-5">
        <ButtonGroup aria-label="Basic example">
          {palette.map((color) => (
            <Button
              key={color}
              variant={selectedColor === color ? "primary" : "secondary"}
              onClick={() => handleColorChangeBtn(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <h3>Add Custom Color:</h3>
      <div className="d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Enter color name"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
        />
        <Button variant="primary" className="ms-2" onClick={addCustomColor}>
          Add
        </Button>
      </div>
    </Container>
  );
};

export default ColorChanger;
