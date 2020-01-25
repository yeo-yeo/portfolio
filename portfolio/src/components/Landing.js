import React from "react";

function Landing() {
  return (
    <section id="landing">
      <img
        src={require("../assets/planet1a.svg")}
        alt=""
        id="planet1"
        class="planet"
      />
      <img
        src={require("../assets/planet2.svg")}
        alt=""
        id="planet2"
        class="planet"
      />
      <img
        src={require("../assets/planet3.svg")}
        alt=""
        id="planet3"
        class="planet"
      />
      <img
        src={require("../assets/planet4.svg")}
        alt=""
        id="planet4"
        class="planet"
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
