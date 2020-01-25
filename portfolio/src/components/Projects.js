import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Some Projects I've Worked On</h2>
      <div id="project-gallery">
        <div id="project-gallery-upper" className="project-gallery-row">
          <figure>
            <figcaption className="project-description">
              A to-do list project built using TDD. To-do items can be added,
              edited, deleted, and marked as done.
            </figcaption>
            <img
              className="project-image"
              src={require("../assets/week2.png")}
              alt="my project"
            />
          </figure>
          <figure>
            <figcaption className="project-description">
              A general knowledge quiz that gives you happy gifs for right
              answers and insults for wrong ones
            </figcaption>
            <img
              className="project-image"
              src={require("../assets/week3.png")}
              alt="my project"
            />
          </figure>
          <figure>
            <figcaption className="project-description">
              Search our list of footballers and birds with a handy
              autocomplete, then see its Wikipedia page
            </figcaption>
            <img
              className="project-image"
              src={require("../assets/week4.png")}
              alt="my project"
            />
          </figure>
        </div>
        <div id="project-gallery-lower" className="project-gallery-row">
          <figure>
            <figcaption className="project-description">
              A project using databases, user profiles and authentication with a
              view of being developed into a game
            </figcaption>
            <img
              className="project-image"
              src={require("../assets/week7.png")}
              alt="my project"
            />
          </figure>
          <figure>
            <figcaption className="project-description">
              Check real-time values of popular cryptocurrencies against several
              major world currencies
            </figcaption>
            <img
              className="project-image"
              src={require("../assets/week5.png")}
              alt="my project"
            />
          </figure>
          <figure>
            <figcaption className="project-description">
              A fun yearbook for cohort 18 of the Founders and Coders course
            </figcaption>
            <img
              className="project-image"
              src={require("../assets/week8.png")}
              alt="my project"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Projects;
