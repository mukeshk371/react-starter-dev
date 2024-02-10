import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between" data-bs-theme="dark">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" height="30" />
        <strong>React Starter Dev</strong>
      </Link>
      <div className="collapse navbar-collapse color-white" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/card-content-slider-app">Card Content Slider App</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">Form</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/button-click">Button Click</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
