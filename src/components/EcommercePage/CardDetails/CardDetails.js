import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  return <h1>Details for restaurant with ID: {id}</h1>;
};

export default CardDetails;
