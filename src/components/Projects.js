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
        <h2 id="first-header">Main projects:</h2>
        <div id="bigger-projects">
          <a
            href="https://github.com/fac18/chatti"
            id="chatti-image"
            className="project-focus-image"
          >
            <img
              src={imageChatti}
              alt="Chatti app screenshot"
              onLoad={() => {
                setImage1Loaded(true);
              }}
            ></img>
          </a>
          <div className="project-focus-text" id="chatti-text">
            <h3>Chatti</h3>
            <h4>DevOps lead / developer</h4>
            <h5>React, Express, PostgreSQL, JWT</h5>
            <ul>
              <li>
                An app for parents delivering activities aimed at meeting small
                children's development goals
              </li>
              <li>
                I took the lead on setting up the front end, back end and
                database, deploying to Heroku and managing authentication
              </li>
              <li>
                I also assisted with workflow organisation and communicating
                with the Product Owner
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/fac18/signpost"
            id="signpost-image"
            className="project-focus-image"
          >
            <img
              src={imageSignpost}
              alt="Signpost app screenshot"
              onLoad={() => {
                setImage2Loaded(true);
              }}
            ></img>
          </a>
          <div className="project-focus-text" id="signpost-text">
            <h3>Signpost</h3>
            <h4>QA lead / developer</h4>
            <h5>React, Express, Airtable, Google Maps, Google Geocoding</h5>
            <ul>
              <li>
                An app showing services for people at risk of homelessness
              </li>
              <li>
                My particular area of responsibility was testing and maintaining
                high standards of code
              </li>
              <li>
                I also led the implementation and custom configurations of the
                Google APIs
              </li>
            </ul>
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
