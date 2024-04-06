import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-[20px] text-center text-lg-start">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="d-flex flex-column">
            <h5>E-commerce Company</h5>
            <Link to="/about-us" className="text-light mt-2 no-underline">About Us</Link>
            <Link to="/contact-us" className="text-light mt-2 no-underline">Contact Us</Link>
          </div>
          <div className="d-flex flex-column mt-4 mt-lg-0">
            <h5>Useful Links</h5>
            <Link to="/privacy-policy" className="text-light mt-2 no-underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-light mt-2 no-underline">Terms of Service</Link>
          </div>
        </div>
        <hr className="mt-[15px] mb-0" />
        <div className="text-center py-[15px]">
          <p className="m-0">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
