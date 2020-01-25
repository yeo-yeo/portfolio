import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <section id="landing">
      <img
        src={require("../assets/planet1a.svg")}
        alt=""
        id="planet1"
        className="planet"
      />
      <img
        src={require("../assets/planet2.svg")}
        alt=""
        id="planet2"
        className="planet"
      />
      <img
        src={require("../assets/planet3.svg")}
        alt=""
        id="planet3"
        className="planet"
      />
      <img
        src={require("../assets/planet4.svg")}
        alt=""
        id="planet4"
        className="planet"
      />
      <h1>
        Gillian
        <br />
        Yeomans
      </h1>
    </section>
  );
}

export default Landing;
