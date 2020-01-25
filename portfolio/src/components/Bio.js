import React from "react";

function Bio() {
  return (
    <section id="bio">
      <div id="bio-header">
        <h2>Hi there, nice to meet you!</h2>
        <aside>
          <p>Bio Length:</p>
          <label for="bio-radio-short">
            <input
              type="radio"
              name="bio-length"
              value="short"
              id="bio-radio-short"
            />
            Short
          </label>
          <label for="bio-radio-medium">
            <input
              type="radio"
              name="bio-length"
              value="medium"
              id="bio-radio-medium"
              checked
            />
            Medium
          </label>
          <label for="bio-radio-long">
            <input
              type="radio"
              name="bio-length"
              value="long"
              id="bio-radio-long"
            />
            Long
          </label>
        </aside>
      </div>
      <div id="bio-text"></div>
    </section>
  );
}

export default Bio;
