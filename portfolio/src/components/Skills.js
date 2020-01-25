import React from "react";
import "./Skills.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section id="skills">
      <h3>I have experience with...</h3>
      <table className="skills-table">
        <tbody>
          <tr className="table-header">
            <th>
              <FontAwesomeIcon icon="desktop" /> Front End
            </th>
            <th>
              <FontAwesomeIcon icon="server" /> Back End
            </th>
            <th>
              <FontAwesomeIcon icon="database" /> Databases
            </th>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Node.js</td>
            <td>PostgreSQL</td>
          </tr>
          <tr>
            <td>CSS</td>
          </tr>
          <tr>
            <td>Javascript</td>
          </tr>
        </tbody>
      </table>

      <table className="skills-table">
        <tbody>
          <tr className="table-header">
            <th>
              <FontAwesomeIcon icon="vial" /> Testing
            </th>
            <th>
              <FontAwesomeIcon icon="tools" /> Tools
            </th>
            <th>
              <FontAwesomeIcon icon="ruler-combined" /> Design
            </th>
          </tr>
          <tr>
            <td>Tape</td>
            <td>Github</td>
            <td>Figma</td>
          </tr>
          <tr>
            <td>Codecov</td>
            <td>Travis</td>
          </tr>
          <tr>
            <td>Supertest</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Skills;
