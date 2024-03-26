import React from "react";
import { useLocation } from "react-router-dom";

const CardDetails = () => {
  const location = useLocation();
  const { state } = location;

  console.log("restaurantData:", state);

  if (!state || !state.restaurantData) {
    return <h1>No restaurant data found.</h1>;
  }

  const { restaurantData } = state;

  return (
    <div>
      <h1>Restaurant Details</h1>
      <p>Name: {restaurantData.info.name}</p>
      <p>Cost for Two: {restaurantData.info.costForTwo}</p>
      <p>Cuisines: {restaurantData.info.cuisines.join(", ")}</p>
    </div>
  );
};

export default CardDetails;
