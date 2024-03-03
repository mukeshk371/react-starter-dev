import React, { useState } from "react";
import { OffcanvasStyles } from "./Styles";

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OffcanvasStyles>
      <>
        <button
          onClick={() =>
            document.querySelector(".offcanvas").classList.add("open")
          }
        >
          Open Offcanvas
        </button>
        <div className={isOpen ? "offcanvas open" : "offcanvas"}>
          <div className="overlay" onClick={toggleOffcanvas}></div>
          <div className="content">
            <button onClick={toggleOffcanvas} className="closeButton">
              Close
            </button>
            <h2>Offcanvas Content</h2>
            <p>
              This is the offcanvas content. You can customize it as needed.
            </p>
          </div>
        </div>
      </>
    </OffcanvasStyles>
  );
};

export default Offcanvas;
