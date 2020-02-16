import React from "react";
import "./Project.css";

const Project = ({ title, imageUrl, githubUrl, text }) => {
  //should replace .previousSibling with something like a React ref?

  return (
    <figure className="project">
      <figcaption className="project-description">{text}</figcaption>
      <img
        src={imageUrl}
        alt={`${title} screenshot`}
        onMouseEnter={event => {
          event.target.style.opacity = "0.2";
          event.target.previousSibling.style.opacity = "1";
          event.target.previousSibling.style.display = "block";
        }}
        onMouseLeave={event => {
          event.target.style.opacity = "0.9";
          event.target.previousSibling.style.opacity = "0";
          event.target.previousSibling.style.display = "none";
        }}
        onClick={() => {
          window.location.replace(githubUrl);
        }}
      ></img>
    </figure>
  );
};

export default Project;
