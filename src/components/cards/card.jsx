import React from "react";
import "./style.css";
import figma from "../../assets/figma.svg";
import code from "../../assets/code.svg";
import box from "../../assets/box.svg";

function Card() {
  return (
    <div className="cards">
      <div className="container">
        <div className="cards__content">
          <div className="card1">
            <img src={figma} alt="#" className="card1-img" />
            <p className="card-title">Design</p>
            <p className="card-pretitle">
              The project interface will be <br /> designed first, our favorite
              tool <br /> is Figma.
            </p>
          </div>
          <div className="card2">
            <img src={code} alt="#" className="card2-img" />
            <p className="card-title">Develop</p>
            <p className="card-pretitle">
              Transform design and write <br /> business logic here. Choose
              <br /> the technology you want.
            </p>
          </div>
          <div className="card3">
            <img src={box} alt="#" className="card3-img" />
            <p className="card-title">Ship</p>
            <p className="card-pretitle">
              After the work is complete, we <br /> will send the project and
              all its <br /> assets to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
