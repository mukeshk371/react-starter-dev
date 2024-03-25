import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import EcommercePage from "../EcommercePage/EcommercePage";
import NavBarEnabler from "../NavBarEnabler/NavBarEnabler";
import CustomNavbarDropdown from "../CustomComponents/CustomNavbarDropdown/CustomNavbarDropdown";
import Breadcrumb from "../CustomComponents/Breadcrumb/Breadcrumb";
import Search from "../CustomComponents/Search/Search";

const Others = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [originalTop, setOriginalTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.querySelector("footer").offsetHeight;
      const headerHeight = document.getElementById("header").offsetHeight;

      const div = document.querySelector(".sticky-div");
      const divHeight = div.offsetHeight;

      const divTop = div.getBoundingClientRect().top;

      if (divTop <= headerHeight) {
        setIsSticky(true);
        setOriginalTop(divTop);
      } else if (isSticky && divTop >= originalTop) {
        setIsSticky(false);
      }

      if (divTop + divHeight >= window.innerHeight - footerHeight) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, originalTop]);
  return (
    <Layout>
      <EcommercePage />
      <div className="body-wrapper d-none">
        <NavBarEnabler />
        <CustomNavbarDropdown />
        <Breadcrumb
          initialPaths={[
            { name: "Home", link: "/" },
            { name: "Link 1", link: "/Link 1" },
            { name: "Link 2", link: "/Link 1/Link 2" },
            { name: "Link 3", link: "/Link 1/Link 2/Link 3" },
            { name: "Link 4", link: "/Link 1/Link 2/Link 3/Link 4" },
          ]}
        />
        <div className="container mt-4">
          <Search />
          <div className={isSticky ? "sticky-div fixed" : "sticky-div"}>
            Sticky Div
          </div>
        </div>

        <footer>Footer</footer>
      </div>
    </Layout>
  );
};

export default Others;
