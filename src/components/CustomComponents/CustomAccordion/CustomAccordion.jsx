import React from "react";
import {
  AppContainer,
  Title,
  AccordionContainer,
  AccordionHeader,
  AccordionContent,
} from "./styles";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { scientists } from "../../../utils/mockData";

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <strong>{item.name}</strong>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </AccordionHeader>
      <AccordionContent style={{ maxHeight: isOpen ? "1000px" : "0" }}>
        <div>
          <img
            src={item.image}
            className="w-25"
            alt={item.name}
          />
          <strong className="d-block">Field: {item.field}</strong>
          <strong className="d-block">
            Birthdate: {item.birthdate}
          </strong>
          <p>Description: {item.description}</p>
        </div>
      </AccordionContent>
    </AccordionContainer>
  );
};

const CustomAccordion = () => {
  return (
    <AppContainer>
      <Title>Accordion Example</Title>
      {scientists.map((item, index) => (
        <Accordion key={index} item={item} />
      ))}
    </AppContainer>
  );
};

export default CustomAccordion;
