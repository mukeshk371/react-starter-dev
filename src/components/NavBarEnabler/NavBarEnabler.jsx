import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import CustomNavBar from "../CustomComponents/CustomNavBar/CustomNavBar";
import { NavBarEnablerStyles } from "./styles";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const NavBarEnabler = () => {
  const [isDiv1Visible, setDiv1Visible] = useState(true);

  const toggleDivs = () => {
    setDiv1Visible(!isDiv1Visible);
  };
  const tooltip = (
    <Tooltip id="tooltip">
      {isDiv1Visible ? "Enable Custom NavBar" : "Disable Custom NavBar"}
    </Tooltip>
  );
  return (
    <>
      <NavBarEnablerStyles>
        <div className="switch-bx">
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <label className="switch">
              <input type="checkbox" onClick={toggleDivs} />
              <span className="slider round"></span>
            </label>
          </OverlayTrigger>
        </div>
      </NavBarEnablerStyles>
      {isDiv1Visible ? <Navbar /> : <CustomNavBar />}
    </>
  );
};

export default NavBarEnabler;
