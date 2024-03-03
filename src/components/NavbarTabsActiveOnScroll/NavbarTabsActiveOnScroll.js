import React, { useState, useEffect, useRef } from "react";
import { NavbarTabsActiveOnScrollStyles } from "./Styles";

const NavbarTabsActiveOnScroll = () => {
  const [active, setActive] = useState("home");
  const [dropdownActive, setDropdownActive] = useState("");
  const tabContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 500) {
        setActive("home");
      } else if (scrollY >= 500 && scrollY < 1000) {
        setActive("about");
      } else if (scrollY >= 1000 && scrollY < 1500) {
        setActive("services");
      } else if (scrollY >= 1500) {
        setActive("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    setActive(tab);
    tabContentRef.current.scrollTo(0, 0);
  };

  const handleDropdownClick = (item) => {
    setDropdownActive(item);
  };

  return (
    <NavbarTabsActiveOnScrollStyles>
      <nav className="my-navbar">
        <ul className="my-navbar-menu">
          <li
            className={
              active === "home" ? "my-navbar-item my-active" : "my-navbar-item"
            }
            onClick={() => handleTabClick("home")}
          >
            Home
          </li>
          <li
            className={
              active === "about" ? "my-navbar-item my-active" : "my-navbar-item"
            }
            onClick={() => handleTabClick("about")}
          >
            About
          </li>
          <li
            className={
              active === "services"
                ? "my-navbar-item my-active"
                : "my-navbar-item"
            }
            onClick={() => handleTabClick("services")}
          >
            Services
          </li>
          <li className="my-navbar-item my-dropdown">
            <button className="my-dropbtn">Dropdown</button>
            <div className="my-dropdown-content">
              <div
                className={dropdownActive === "item1" ? "my-active" : ""}
                onClick={() => handleDropdownClick("item1")}
              >
                Item 1
              </div>
              <div
                className={dropdownActive === "item2" ? "my-active" : ""}
                onClick={() => handleDropdownClick("item2")}
              >
                Item 2
              </div>
              <div
                className={dropdownActive === "item3" ? "my-active" : ""}
                onClick={() => handleDropdownClick("item3")}
              >
                Item 3
              </div>
            </div>
          </li>
          <li
            className={
              active === "contact"
                ? "my-navbar-item my-active"
                : "my-navbar-item"
            }
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
      <div className="tab-content" ref={tabContentRef}>
        <div id="home">Home content</div>
        <div id="about">About content</div>
        <div id="services">Services content</div>
        <div id="contact">Contact content</div>
      </div>
    </NavbarTabsActiveOnScrollStyles>
  );
};

export default NavbarTabsActiveOnScroll;
