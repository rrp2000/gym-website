import React from "react";
import "./program.css";
const Program = () => {
  return (
    <div id="programContainter">
      <div className="cardContainer">
        <div className="card">
          <img
            className="cardImage"
            src="assets/bench-press-56a83ae23df78cf7729d2c33.jpg"
            alt=" workout"
          />
          <div className="cardDetails">
            Best of the best traing facilities.
          </div>
        </div>
        <div className="card">
          <img
            className="cardImage"
            src="assets/bench-press-56a83ae23df78cf7729d2c33.jpg"
            alt=" workout"
          />
          <div className="cardDetails">
            Best of the best traing facilities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
