import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Card Details Page</h1>
      <p>Card ID: {id}</p>
    </div>
  );
};

export default CardDetails;
