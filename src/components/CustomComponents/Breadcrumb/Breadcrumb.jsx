import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import logo from "../../../logo.svg";

const Breadcrumb = ({ initialPaths }) => {
  const [paths, setPaths] = useState(initialPaths);

  const handleClick = (index) => {
    const newPaths = paths.slice(0, index + 1);
    setPaths(newPaths);
  };

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbCustom}>
      <div className="d-flex align-items-center">
        <img src={logo} className="App-logo" alt="Logo" height="30" />
        <strong className="ms-2">Breadcrumb</strong>
      </div>
      <ol className={styles.breadcrumb}>
        {paths.map((path, index) => (
          <li
            key={index}
            className={`${styles["breadcrumb-item"]} ${
              index === paths.length - 1 ? styles.active : ""
            }`}
          >
            {index === paths.length - 1 ? (
              <span className={styles.active}>{path.name}</span>
            ) : (
              <Link to={path.link} onClick={() => handleClick(index)}>
                {path.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
