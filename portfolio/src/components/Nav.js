import React from "react";

function Nav() {
  return (
    <nav id="rocket-nav">
      <img src={require("../assets/navline.svg")} alt="" id="navline" />
      <img
        src={require("../assets/rocket-svgrepo-com 1.svg")}
        alt=""
        id="rocket"
      />
    </nav>
  );
}

export default Nav;
