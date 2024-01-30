import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#" className="logo">
              Collosal.
            </a>
          </div>
          <nav className="header__nav">
            <a href="#" className="header__nav-link">
              Services
            </a>
            <a href="#" className="header__nav-link">
              How We Work
            </a>
            <a href="#" className="header__nav-link">
              Projects
            </a>
            <a href="#" className="header__nav-link">
              About
            </a>
          </nav>
          <div className="header__button">
            <button className="btn">Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
