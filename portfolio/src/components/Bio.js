import React from "react";
import "./Bio.css";

function Bio() {
  //the different bio options
  const [bios, setBios] = React.useState({
    short:
      "<p>I'm Gillian, a recent graduate of the <a href='https://www.foundersandcoders.com/'>Founders and Coders</a> full-stack bootcamp.  I'm looking for full-stack/back-end developer opportunities.</p><p>Previously, I spent 4 years in finance and 2 years teaching English.</p><p>I'm looking forward to honing my development skills in a team environment, while bringing my previously developed skills to the table too.</p>",
    medium:
      "<p>I'm Gillian, a recent graduate of the <a href='https://www.foundersandcoders.com/'>Founders and Coders</a> full-stack bootcamp.  I'm currently looking for full-stack or back-end developer opportunities.</p><p>Before moving into tech, I spent 4 years in finance in London and Bermuda and 2 years teaching English in sunny Rome.</p><p>I have a First Class degree from the University of Edinburgh in English Literature and Latin</p><p>I'm looking forward to honing my development skills in a team environment, while bringing my previously developed skills to the table too.</p>",
    long:
      "<p>I'm Gillian, a recent graduate of the <a href='https://www.foundersandcoders.com/'>Founders and Coders</a> full-stack bootcamp.  I'm currently looking for full-stack or back-end developer opportunities.</p><p>Before moving into tech, I spent 4 years in finance in London and Bermuda and 2 years teaching English in sunny Rome.  While working in finance I did a lot of large-scale spreadsheet modelling which was a sort of introduction to coding.  It gave me a lot of insight into how business processes and technology are integrated, and how in traditional industries there is room for improvement.</p><p>I have a First Class degree from the University of Edinburgh in English Literature and Latin.  While it might not be the 100% traditional background for a developer, I think the literary and linguistic analsysis, and rigorous application of grammar and syntax in Latin are actually a perfect preparation for programming.</p><p>I'm looking forward to honing my development skills in a team environment, while bringing my previously developed skills to the table too.</p>"
  });

  //state for current checked radio button
  const [selectedBio, setSelectedBio] = React.useState("medium");

  //get current bio text for dangerouslySetInnerHTML
  function getBio() {
    return { __html: bios[selectedBio] };
  }

  return (
    <section id="bio">
      <div id="bio-header">
        <h2>Hi there, nice to meet you!</h2>
        <aside>
          <p>Bio Length:</p>
          <label htmlFor="bio-radio-short">
            <input
              type="radio"
              name="bio-length"
              value="short"
              id="bio-radio-short"
              checked={selectedBio === "short"}
              onChange={event => setSelectedBio(event.target.value)}
            />
            Short
          </label>
          <label htmlFor="bio-radio-medium">
            <input
              type="radio"
              name="bio-length"
              value="medium"
              id="bio-radio-medium"
              checked={selectedBio === "medium"}
              onChange={event => setSelectedBio(event.target.value)}
            />
            Medium
          </label>
          <label htmlFor="bio-radio-long">
            <input
              type="radio"
              name="bio-length"
              value="long"
              id="bio-radio-long"
              checked={selectedBio === "long"}
              onChange={event => setSelectedBio(event.target.value)}
            />
            Long
          </label>
        </aside>
      </div>
      <div id="bio-text" dangerouslySetInnerHTML={getBio()}></div>
    </section>
  );
}

export default Bio;
