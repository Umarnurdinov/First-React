import React from "react";
import "./style.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          <p className="hero-title">CLIENT-DEVELOPMENT DRIVEN</p>
          <p className="hero-pretitle">
            We Design. We Develop. We Ship. <br /> In The Same Day.
          </p>
          <p className="hero-undertitle">
            We are committed to not making clients wait. We will deliver the
            work <br /> as quickly as possible. Even on the same day. Even so,
            we do not <br /> reduce the quality of our work.
          </p>
          <div className="hero__btns">
            <button className="btnsend">Send Quote</button>
            <button className="btnlearn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
