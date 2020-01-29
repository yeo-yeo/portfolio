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
  //horizontal scrolling for screens with >1000px width
  React.useEffect(() => {
    window.addEventListener("wheel", horizontalScroll, {
      passive: false
    });
    return () =>
      window.removeEventListener("wheel", horizontalScroll, {
        passive: false
      });
  }, []);

  function horizontalScroll(event) {
    //see note here about safari vs other browsers RE where scrolling happens
    //https://www.w3schools.com/jsref/prop_element_scrollleft.asp
    if (window.innerWidth > 1000) {
      event.preventDefault();
      document.documentElement.scrollLeft += event.deltaY;
      document.documentElement.scrollLeft += event.deltaX;
    }
  }

  //function to autogenerate stars for each section
  React.useEffect(() => {
    const sections = document.getElementsByTagName("section");
    console.log(sections);
    Array.from(sections).forEach(section => {
      for (let i = 0; i < 30; i++) {
        let newStar = document.createElement("img");
        newStar.src = require("./assets/star.svg");
        newStar.classList.add("star");
        newStar.alt = "";
        newStar.style.top = Math.random() * window.innerHeight + "px";
        newStar.style.left = Math.random() * window.innerWidth + "px";
        section.appendChild(newStar);
      }
    });
  }, []);

  return (
    <>
      <Nav />
      <div id="site-container">
        <img
          src={require("./assets/satellite-svgrepo-com.svg")}
          className="satellite"
          alt=""
        />
        <img
          src={require("./assets/satellite-svgrepo-com.svg")}
          className="satellite"
          alt=""
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
