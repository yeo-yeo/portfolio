import React from "react";
import "./Cats.css";
import accollo1 from "../assets/accollo1.png";
import accollo2 from "../assets/accollo2.png";
import accollo3 from "../assets/accollo3.png";
import disagio1 from "../assets/disagio1.png";
import disagio2 from "../assets/disagio2.png";
import disagio3 from "../assets/disagio3.png";

const Cats = () => {
  const catImages = [
    accollo1,
    disagio1,
    accollo2,
    disagio2,
    accollo3,
    disagio3
  ];

  return (
    <>
      {catImages.map((image, index) => {
        return (
          <div
            className="cat-container"
            key={index}
            style={{
              left: `${16 * index + 5}vw`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * (6 - 3) + 3}s`
            }}
          >
            <img
              className="cat"
              src={image}
              alt="falling cat"
              style={{
                animationDuration: `${Math.random() * (3 - 1) + 1}s`
              }}
            ></img>
          </div>
        );
      })}
    </>
  );
};

export default Cats;
