// src/components/NotFound.js
import React from "react";
import "./NotFound.css"; // Import the CSS file

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div>
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oops! The page you are looking for does not exist.
        </p>
        <a href="/" className="notfound-link">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
