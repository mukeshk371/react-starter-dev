import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} className='App-logo' alt="Logo" height="30" />
        <strong className="ms-2">React Starter Dev</strong>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/form">Form</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/card-content-slider-app">Card Content Slider App</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
