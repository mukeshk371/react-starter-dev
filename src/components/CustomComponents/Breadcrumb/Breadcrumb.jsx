import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../logo.svg";
import { BreadcrumbStyles } from "./styles";

const Breadcrumb = ({ initialPaths }) => {
  const [paths, setPaths] = useState(initialPaths);

  const handleClick = (index) => {
    const newPaths = paths.slice(0, index + 1);
    setPaths(newPaths);
  };

  return (
    <BreadcrumbStyles>
      <nav aria-label="breadcrumb" className="breadcrumb-custom">
        <div className="d-flex align-items-center">
          <img src={logo} className="App-logo" alt="Logo" height="30" />
          <strong className="ms-2">Breadcrumb</strong>
        </div>
        <ol className="breadcrumb">
          {paths.map((path, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${
                index === paths.length - 1 ? "active" : ""
              }`}
            >
              {index === paths.length - 1 ? (
                <span className="active">{path.name}</span>
              ) : (
                <Link to={path.link} onClick={() => handleClick(index)}>
                  {path.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </BreadcrumbStyles>
  );
};

export default Breadcrumb;
