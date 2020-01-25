import React from "react";

function Skills() {
  return (
    <section id="skills">
      <h3>I have experience with...</h3>
      <table class="skills-table">
        <tr class="table-header">
          <th>
            <i class="fas fa-desktop"></i> Front End
          </th>
          <th>
            <i class="fas fa-server"></i> Back End
          </th>
          <th>
            <i class="fas fa-database"></i> Databases
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
      </table>

      <table class="skills-table">
        <tr class="table-header">
          <th>
            <i class="fas fa-vial"></i> Testing
          </th>
          <th>
            <i class="fas fa-tools"></i> Tools
          </th>
          <th>
            <i class="fas fa-ruler-combined"></i> Design
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
      </table>
    </section>
  );
}

export default Skills;
