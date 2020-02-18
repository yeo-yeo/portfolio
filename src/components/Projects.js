import React from "react";
import "./Projects.css";
import loader from "../assets/loader.svg";
import projectList from "../assets/projectList";
import Project from "./Project";
import imageChatti from "../assets/projects/chatti.png";
import imageSignpost from "../assets/projects/week12.jpg";

const Projects = () => {
  const [image1Loaded, setImage1Loaded] = React.useState(false);
  const [image2Loaded, setImage2Loaded] = React.useState(false);
  const [otherProjects] = React.useState(projectList);

  return (
    <>
      {!image1Loaded && !image2Loaded && (
        <img id="loader" src={loader} alt="loader"></img>
      )}
      <main
        id="projects-main"
        style={{
          visibility: image1Loaded && image2Loaded ? "visible" : "hidden"
        }}
      >
        <div className="project-focus">
          <a href="https://github.com/fac18/chatti">
            <img
              className="project-focus-image"
              src={imageChatti}
              alt="Chatti app screenshot"
              onLoad={() => {
                setImage1Loaded(true);
              }}
            ></img>
          </a>
          <div className="project-focus-text">
            <h3>Chatti</h3>
            <h4>DevOps lead / developer</h4>
            <h5>React, Express, PostgreSQL, JWT</h5>
            <p>
              About the project blah blah blah. About the project blah blah
              blah. About the project blah blah blah. About the project blah
              blah blah. About the project blah blah blah. About the project
              blah blah blah.
            </p>
          </div>
        </div>
        <div className="project-focus">
          <a href="https://github.com/fac18/signpost">
            <img
              className="project-focus-image"
              src={imageSignpost}
              alt="Signpost app screenshot"
              onLoad={() => {
                setImage2Loaded(true);
              }}
            ></img>
          </a>
          <div className="project-focus-text">
            <h3>Signpost</h3>
            <h4>QA lead / developer</h4>
            <h5>React, Express, Airtable, Google Maps, Google Geocoding</h5>
            <p>
              About the project blah blah blah. About the project blah blah
              blah. About the project blah blah blah. About the project blah
              blah blah. About the project blah blah blah. About the project
              blah blah blah.
            </p>
          </div>
        </div>
        <h2>Other projects:</h2>
        <div className="project-gallery">
          {otherProjects.map(project => {
            return (
              <Project
                key={project.title}
                title={project.title}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                text={project.text}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Projects;
