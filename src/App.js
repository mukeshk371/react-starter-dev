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
import Carousel from "./components/Carousel/Carousel";
import NavbarTabsActiveOnScroll from "./components/NavbarTabsActiveOnScroll/NavbarTabsActiveOnScroll";
import Offcanvas from "./components/Offcanvas/Offcanvas";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import AdvancedMultiStepForm from "./components/Forms/AdvancedMultiStepForm/AdvancedMultiStepForm";
import EcommercePage from "./components/EcommercePage/EcommercePage";
import CartPage from "./components/EcommercePage/CartPage/CartPage";
import CardDetails from "./components/EcommercePage/CardDetails/CardDetails";
import CheckoutPage from "./components/EcommercePage/CheckoutPage/CheckoutPage";
import AboutUs from "./components/EcommercePage/AboutUs/AboutUs";
import ContactUs from "./components/EcommercePage/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/card-content-slider-app"
          element={<CardContentSliderApp />}
        />
        <Route path="/form" element={<FormRouter />} />
        <Route
          path="/advanced-multi-step-form"
          element={<AdvancedMultiStepForm />}
        />
        <Route path="/button-click" element={<ButtonClick />} />
        <Route path="/state-object-update" element={<StateObjectUpdate />} />
        <Route path="/custom-tab" element={<CustomTab />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route
          path="/navbar-tabs-active-on-scroll"
          element={<NavbarTabsActiveOnScroll />}
        />
        <Route path="/offcanvas" element={<Offcanvas />} />
        <Route path="/color-changer" element={<ColorChanger />} />
        <Route path="/ecommerce-page" element={<EcommercePage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route index element={<Navigate to="/ecommerce-page" />} />
        <Route path="/restaurant/:id" element={<CardDetails />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
