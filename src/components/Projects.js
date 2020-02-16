import React from "react";
import "./Projects.css";
import imageChatti from "../assets/chatti.png";
import imageSignpost from "../assets/week12.png";
import imageWeek8 from "../assets/week8.jpg";
import imageWeek5 from "../assets/week5.jpg";
import imageWeek2 from "../assets/week2.jpg";
import imageWeek7 from "../assets/week7.jpg";
import imageApplication from "../assets/application.png";
import imageCalculator from "../assets/calculator.png";

const Projects = () => {
  const handleMouseEnter = event => {
    event.target.style.opacity = "0.2";
    event.target.previousSibling.style.opacity = "1";
    event.target.previousSibling.style.display = "block";
  };

  const handleMouseLeave = event => {
    event.target.style.opacity = "0.9";
    event.target.previousSibling.style.opacity = "0";
    event.target.previousSibling.style.display = "none";
  };

  const handleClick = event => {
    window.location.replace("https://github.com/fac18/week-8-AGIL/");
  };

  return (
    <main>
      <div className="project-focus">
        <a href="https://github.com/fac18/chatti">
          <img
            className="project-focus-image"
            src={imageChatti}
            alt="Chatti app screenshot"
          ></img>
        </a>
        <div className="project-focus-text">
          <h3>Chatti</h3>
          <h4>DevOps lead / developer</h4>
          <h5>React, Express, PostgreSQL, JWT</h5>
          <p>
            About the project blah blah blah. About the project blah blah blah.
            About the project blah blah blah. About the project blah blah blah.
            About the project blah blah blah. About the project blah blah blah.
          </p>
        </div>
      </div>
      <div className="project-focus">
        <a href="https://github.com/fac18/signpost">
          <img
            className="project-focus-image"
            src={imageSignpost}
            alt="Signpost app screenshot"
          ></img>
        </a>
        <div className="project-focus-text">
          <h3>Signpost</h3>
          <h4>QA lead / developer</h4>
          <h5>React, Express, Airtable, Google Maps, Google Geocoding</h5>
          <p>
            About the project blah blah blah. About the project blah blah blah.
            About the project blah blah blah. About the project blah blah blah.
            About the project blah blah blah. About the project blah blah blah.
          </p>
        </div>
      </div>
      <h2>Other projects:</h2>
      <div className="project-gallery">
        <figure className="project">
          <figcaption className="project-description">
            A fun yearbook for cohort 18 of the Founders and Coders course
          </figcaption>
          <img
            src={imageWeek8}
            alt="Yearbook screenshot"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          ></img>
        </figure>
        <div className="project">
          <a href="https://github.com/fac18/week5-famk-backend-api">
            <img
              src={imageWeek5}
              alt="Cryptocurrency converter screenshot"
            ></img>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/fac18/week2-ajnp-sbs-todolist">
            <img src={imageWeek2} alt="To do list screenshot"></img>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/fac18/week7-coda-squall">
            <img src={imageWeek7} alt="Game screenshot"></img>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/yeo-yeo/yeo-yeo.github.io">
            <img src={imageApplication} alt="Application screenshot"></img>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/yeo-yeo/JS_Calculator">
            <img src={imageCalculator} alt="Calculator screenshot"></img>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
