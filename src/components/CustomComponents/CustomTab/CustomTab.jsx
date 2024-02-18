import React, { useState } from "react";
import CardContentSliderApp from "../../CardContentSlider/CardContentSlider";
import ButtonClick from "../../Forms/ButtonClick";
import StateObjectUpdate from "../../Forms/StateObjectUpdate/StateObjectUpdate";
import FormRouter from "../../Forms/FormRouter/FormRouter";
import { CustomTabStyles } from "./styles";

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <CustomTabStyles>
      <div className="customNavbar">
        <button
          onClick={() => handleTabClick(0)}
          className={activeTab === 0 ? "active" : ""}
        >
          Slider
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? "active" : ""}
        >
          Button Click
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? "active" : ""}
        >
          State Update
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? "active" : ""}
        >
          Form Router
        </button>
      </div>
      {activeTab === 0 && <CardContentSliderApp />}
      {activeTab === 1 && <ButtonClick />}
      {activeTab === 2 && <StateObjectUpdate />}
      {activeTab === 3 && <FormRouter />}
    </CustomTabStyles>
  );
};

export default CustomTab;
