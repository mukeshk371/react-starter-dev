import React, { useState } from "react";
import StateObjectUpdate from "../StateObjectUpdate/StateObjectUpdate";
import ButtonClick from "../ButtonClick";
import Form from "../Form";

const FormRouter = () => {
  const [activeTab, setActiveTab] = useState("StateObjectUpdate");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <ul className="nav nav-pills mb-3" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "StateObjectUpdate" ? "active" : ""}`}
            onClick={() => handleTabChange("StateObjectUpdate")}
          >
            State Object Update
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "ButtonClick" ? "active" : ""}`}
            onClick={() => handleTabChange("ButtonClick")}
          >
            Button Click
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "Form" ? "active" : ""}`}
            onClick={() => handleTabChange("Form")}
          >
            Form
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane fade ${activeTab === "StateObjectUpdate" ? "show active" : ""}`}>
          <StateObjectUpdate />
        </div>
        <div className={`tab-pane fade ${activeTab === "ButtonClick" ? "show active" : ""}`}>
          <ButtonClick />
        </div>
        <div className={`tab-pane fade ${activeTab === "Form" ? "show active" : ""}`}>
          <Form />
        </div>
      </div>
    </>
  );
};

export default FormRouter;
