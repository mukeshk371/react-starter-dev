import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import CardContentSliderApp from "./components/CardContentSlider/CardContentSlider";
import ButtonClick from "./components/Forms/ButtonClick";
import StateObjectUpdate from "./components/Forms/StateObjectUpdate/StateObjectUpdate";
import FormRouter from "./components/Forms/FormRouter/FormRouter";
import CustomTab from "./components/CustomComponents/CustomTab/CustomTab";
import Layout from "./components/Layout/Layout";
import NavBarEnabler from "./components/NavBarEnabler/NavBarEnabler";
import Breadcrumb from "./components/CustomComponents/Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import Carousel from "./components/Carousel/Carousel";
import NavbarTabsActiveOnScroll from "./components/NavbarTabsActiveOnScroll/NavbarTabsActiveOnScroll";
import Offcanvas from "./components/Offcanvas/Offcanvas";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import CustomNavbarDropdown from "./components/CustomComponents/CustomNavbarDropdown/CustomNavbarDropdown";
import Search from "./components/CustomComponents/Search/Search";

function App() {
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
    <Router>
      <Layout>
        <div className="body-wrapper">
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

            <Routes>
              <Route
                path="/card-content-slider-app"
                element={<CardContentSliderApp />}
              />
              <Route path="/form" element={<FormRouter />} />
              <Route path="/button-click" element={<ButtonClick />} />
              <Route
                path="/state-object-update"
                element={<StateObjectUpdate />}
              />
              <Route
                index
                element={<Navigate to="/card-content-slider-app" />}
              />
              <Route path="/custom-tab" element={<CustomTab />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route
                path="/navbar-tabs-active-on-scroll"
                element={<NavbarTabsActiveOnScroll />}
              />
              <Route path="/offcanvas" element={<Offcanvas />} />
              <Route path="/color-changer" element={<ColorChanger />} />
            </Routes>
          </div>

          <footer>Footer</footer>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
