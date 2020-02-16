import React from "react";
import "./Cats.css";
import accollo1 from "../assets/accollo1.png";
import disagio1 from "../assets/disagio1.png";

const Cats = () => {
  return (
    <>
      <div className="cat-container" id="accollo1">
        <img className="cat" src={accollo1} alt="falling cat"></img>
      </div>
      <div className="cat-container" id="disagio1">
        <img className="cat" src={disagio1} alt="falling cat"></img>
      </div>
      <div className="cat-container" id="accollo2">
        <img className="cat" src={accollo1} alt="falling cat"></img>
      </div>
      <div className="cat-container" id="disagio2">
        <img className="cat" src={disagio1} alt="falling cat"></img>
      </div>
    </>
  );
};

export default Cats;
