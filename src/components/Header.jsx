import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          Expression Engine Form
        </a>
      </div>
    </header>
  );
};

export default Header;
