// CustomNavBar.jsx

import React, { useState } from "react";
import styles from "./CustomNavBar.module.scss";
import CardContentSliderApp from "../../CardContentSlider/CardContentSlider";
import ButtonClick from "../../Forms/ButtonClick";
import StateObjectUpdate from "../../Forms/StateObjectUpdate/StateObjectUpdate";
import FormRouter from "../../Forms/FormRouter/FormRouter";
import logo from "../../../logo.svg";

const CustomNavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "CardContentSliderApp":
        return <CardContentSliderApp />;
      case "ButtonClick":
        return <ButtonClick />;
      case "StateObjectUpdate":
        return <StateObjectUpdate />;
      case "FormRouter":
        return <FormRouter />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={styles.navbarCustom}>
        <a href="/" target="_self">
          <img src={logo} className="App-logo" alt="Logo" height="30" />
          <strong>Custom NavBar</strong>
        </a>
        <div
          className={`nav-item ${activeTab === "CardContentSliderApp" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("CardContentSliderApp")}
        >
          Card Content Slider App
        </div>
        <div
          className={`nav-item ${activeTab === "ButtonClick" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("ButtonClick")}
        >
          Button Click
        </div>
        <div
          className={`nav-item ${activeTab === "StateObjectUpdate" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("StateObjectUpdate")}
        >
          State Object Update
        </div>
        <div
          className={`nav-item ${activeTab === "FormRouter" ? styles.activeTab : ""}`}
          onClick={() => handleTabClick("FormRouter")}
        >
          Form Router
        </div>
      </div>
      <div className="content">{renderComponent()}</div>
    </div>
  );
};

export default CustomNavBar;
