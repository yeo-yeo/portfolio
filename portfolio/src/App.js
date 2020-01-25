import React from "react";
import "./style.css";
import "./reset.css";
import "./mediaQueries.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

//import font awesome icons and add to library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDesktop,
  faServer,
  faDatabase,
  faTools,
  faVial,
  faRulerCombined
} from "@fortawesome/free-solid-svg-icons";
library.add(faDesktop, faServer, faDatabase, faTools, faVial, faRulerCombined);

function App() {
  return (
    <>
      <Nav />
      <div id="site-container">
        <img
          src={require("./assets/satellite-svgrepo-com.svg")}
          className="satellite"
        />
        <img
          src={require("./assets/satellite-svgrepo-com.svg")}
          className="satellite"
        />
        <Landing />
        <Bio />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <script src="./main.js"></script>
      <script src="./scrolling.js"></script>
    </>
  );
}

export default App;
