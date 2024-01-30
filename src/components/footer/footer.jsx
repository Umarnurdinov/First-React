import React from "react";
import "./style.css";
import github from "../../assets/github.svg";
import forbes from "../../assets/forbes.svg";
import google from "../../assets/google.svg";
import microsoft from "../../assets/microsoft.svg";
import facebook from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logos">
          <img src={github} alt="#" className="footer-logo" />
          <img src={forbes} alt="#" className="footer-logo" />
          <img src={google} alt="#" className="footer-logo" />
          <img src={microsoft} alt="#" className="footer-logo" />
          <img src={facebook} alt="#" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
