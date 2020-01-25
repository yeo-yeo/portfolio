import React from "react";
import "./style.css";
import "./reset.css";
import "./mediaQueries.css";
import Landing from "./components/Landing";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <body>
      <nav id="rocket-nav">
        <img src={require("./assets/navline.svg")} alt="" id="navline" />
        <img
          src={require("./assets/rocket-svgrepo-com 1.svg")}
          alt=""
          id="rocket"
        />
      </nav>
      <div id="site-container">
        <img
          src={require("./assets/satellite-svgrepo-com.svg")}
          class="satellite"
        />
        <img
          src={require("./assets/satellite-svgrepo-com.svg")}
          class="satellite"
        />
        <Landing />
        <Bio />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <script src="./main.js"></script>
      <script src="./scrolling.js"></script>
    </body>
  );
}

export default App;
