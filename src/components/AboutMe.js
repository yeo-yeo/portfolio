import React from "react";
import "./AboutMe.css";
import loader from "../assets/loader.svg";
import headshot from "../assets/headshot.jpg";

const AboutMe = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <>
      {!imageLoaded && <img id="loader" src={loader} alt="loader"></img>}
      <main
        id="about-me-main"
        style={{ visibility: imageLoaded ? "visible" : "hidden" }}
      >
        <img
          src={headshot}
          className="gillian"
          alt="Gillian"
          onLoad={() => {
            setImageLoaded(true);
          }}
        ></img>
        <div className="bio">
          <p>
            I'm Gillian, a recent graduate of the{" "}
            <a href="https://www.foundersandcoders.com/">Founders and Coders</a>{" "}
            full-stack bootcamp. I'm currently looking for full-stack or
            back-end developer opportunities.
          </p>
          <p>
            Before moving into tech, I spent 4 years in finance in London and
            Bermuda and 2 years teaching English in sunny Rome. While working in
            finance I did a lot of large-scale spreadsheet modelling which was
            my sort of introduction to coding. It gave me a lot of insight into
            how business processes and technology are integrated, and how there
            is room for improvement in traditional industries.
          </p>
          <p>
            I have a first class degree from the University of Edinburgh in
            English Literature and Latin. While it might not be a 100%
            traditional background for a developer, I think the literary and
            linguistic analysis of both subjects, and rigorous application of
            grammar and syntax required in Latin are actually a perfect
            preparation for programming.
          </p>
          <p>
            I'm looking forward to honing my development skills in a team
            environment, while bringing my previously gathered skills to the
            table too. Hope to see you soon!
          </p>
          <p>
            You can download my full CV{" "}
            <a href="./GYeomans_CV.pdf" download>
              {" "}
              here
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
