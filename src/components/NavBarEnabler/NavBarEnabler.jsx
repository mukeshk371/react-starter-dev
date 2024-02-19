import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import CustomNavBar from "../CustomComponents/CustomNavBar/CustomNavBar";
import { NavBarEnablerStyles } from "./styles";

const NavBarEnabler = () => {
  const [isDiv1Visible, setDiv1Visible] = useState(true);

  const toggleDivs = () => {
    setDiv1Visible(!isDiv1Visible);
  };
  return (
    <>
      <NavBarEnablerStyles>
        <div className="switch-bx">
          <label className={isDiv1Visible ? "checkbox-text" : "checkbox-text enable"} htmlFor="toggleCheckbox">
            {isDiv1Visible ? "Enable Custom NavBar" : "Disable Custom NavBar"}
          </label>
          <label className="switch">
            <input type="checkbox" onClick={toggleDivs} />
            <span className="slider round"></span>
          </label>
        </div>
      </NavBarEnablerStyles>
      {isDiv1Visible ? <Navbar /> : <CustomNavBar />}
    </>
  );
};

export default NavBarEnabler;
