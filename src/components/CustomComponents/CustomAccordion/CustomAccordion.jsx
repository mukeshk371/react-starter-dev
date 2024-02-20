import React, { useState } from "react";
import {
  AppContainer,
  Title,
  AccordionContainer,
  AccordionHeader,
  AccordionContent,
} from "./styles";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { scientists } from "../../../utils/mockData";

const Accordion = ({ item, open, onToggle }) => {
  return (
    <AccordionContainer>
      <AccordionHeader onClick={onToggle}>
        <strong>{item.name}</strong>
        {open ? <ChevronUp /> : <ChevronDown />}
      </AccordionHeader>
      <AccordionContent style={{ maxHeight: open ? "1000px" : "0" }}>
        <div>
          <img src={item.image} className="w-25" alt={item.name} />
          <strong className="d-block">Field: {item.field}</strong>
          <strong className="d-block">Birthdate: {item.birthdate}</strong>
          <p>Description: {item.description}</p>
        </div>
      </AccordionContent>
    </AccordionContainer>
  );
};

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AppContainer>
      <Title>Accordion Example</Title>
      {scientists.map((item, index) => (
        <Accordion
          key={index}
          item={item}
          open={index === openIndex}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </AppContainer>
  );
};

export default CustomAccordion;
