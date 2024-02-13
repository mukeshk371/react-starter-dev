import React, { useState } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";
import { XLg, PlusLg, PencilFill } from "react-bootstrap-icons";

function ArrayUpdateInState() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  const handleEditItem = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
  };

  const handleUpdateItem = () => {
    if (inputValue.trim() !== "") {
      const newItems = [...items];
      newItems[editIndex] = inputValue;
      setItems(newItems);
      setInputValue("");
      setEditIndex(null);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Todo List</h1>
      <Form className="mb-3 d-flex align-items-stretch justify-content-center">
        <Form.Group className="me-3">
          <Form.Control
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter item"
          />
        </Form.Group>
        {editIndex === null ? (
          <Button
            variant="primary"
            className="d-inline-flex align-items-center"
            onClick={handleAddItem}
          >
            <PlusLg />
          </Button>
        ) : (
          <Button variant="success" onClick={handleUpdateItem}>
            Update
          </Button>
        )}
      </Form>

      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item
            key={index}
            className={`d-flex justify-content-between align-items-stretch ${
              editIndex === index ? "shadow" : ""
            }`}
          >
            {editIndex === index ? (
              <Form.Control
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            ) : (
              <h5>{item}</h5>
            )}
            <div className="d-inline-flex align-items-stretch">
              {editIndex !== index && (
                <Button
                  variant="info"
                  className="d-inline-flex align-items-center"
                  onClick={() => handleEditItem(index)}
                >
                  <PencilFill />
                </Button>
              )}
              <Button
                variant="danger"
                className="ms-3 d-inline-flex align-items-center"
                onClick={() => handleRemoveItem(index)}
              >
                <XLg />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ArrayUpdateInState;
