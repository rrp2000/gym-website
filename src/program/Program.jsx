import React from "react";
import "./program.css";
const Program = () => {
  return (
    <div id="programContainter">
      <h2>Expore what we provide...</h2>
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
            src="assets/pexels-pixabay-416754.jpg"
            alt=" workout"
          />
          <div className="cardDetails">
            Best of the best trainers.
          </div>
        </div>
        <div className="card">
          <img
            className="cardImage"
            src="assets/mark-bertulfo-XKimW0pke6w-unsplash.jpg"
            alt=" workout"
          />
          <div className="cardDetails">
            Best of the best equipments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
