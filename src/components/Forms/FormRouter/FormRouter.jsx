import React from "react";
import { Tab, Nav } from "react-bootstrap";
import StateObjectUpdate from "../StateObjectUpdate/StateObjectUpdate";
import ButtonClick from "../ButtonClick";
import Form from "../Form";
import ArrayUpdateInState from "../../ArrayUpdateInState/ArrayUpdateInState";
import MultiStepForm from "../MultiStepForm/MultiStepForm";

const FormRouter = () => {
  return (
    <Tab.Container defaultActiveKey="StateObjectUpdate">
      <Nav variant="pills" className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="StateObjectUpdate">State Object Update</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ButtonClick">Button Click</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Form">Form</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="ArrayUpdateInState">Updating Arrays in State</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="MultiStepForm">Multi Step Form</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="StateObjectUpdate">
          <StateObjectUpdate />
        </Tab.Pane>
        <Tab.Pane eventKey="ButtonClick">
          <ButtonClick />
        </Tab.Pane>
        <Tab.Pane eventKey="Form">
          <Form />
        </Tab.Pane>
        <Tab.Pane eventKey="ArrayUpdateInState">
          <ArrayUpdateInState />
        </Tab.Pane>
        <Tab.Pane eventKey="MultiStepForm">
          <MultiStepForm />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default FormRouter;
