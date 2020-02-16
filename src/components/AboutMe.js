import React from "react";
import "./AboutMe.css";
import loader from "../assets/loader.svg";
import headshot from "../assets/headshot.jpg";

const AboutMe = () => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setShowLoader(false), 400);
  }, []);

  return (
    <>
      {showLoader && <img id="loader" src={loader} alt="loader"></img>}
      {!showLoader && (
        <main>
          <img src={headshot} className="gillian" alt="Gillian"></img>
          <p className="bio">
            I'm Gillian, a recent graduate of the{" "}
            <a href="https://www.foundersandcoders.com/">Founders and Coders</a>{" "}
            full-stack bootcamp. I'm currently looking for full-stack or
            back-end developer opportunities.
          </p>
          <p className="bio">
            Before moving into tech, I spent 4 years in finance in London and
            Bermuda and 2 years teaching English in sunny Rome. While working in
            finance I did a lot of large-scale spreadsheet modelling which was a
            sort of introduction to coding. It gave me a lot of insight into how
            business processes and technology are integrated, and how in
            traditional industries there is room for improvement.
          </p>
          <p className="bio">
            I have a First className degree from the University of Edinburgh in
            English Literature and Latin. While it might not be the 100%
            traditional background for a developer, I think the literary and
            linguistic analsysis, and rigorous application of grammar and syntax
            in Latin are actually a perfect preparation for programming.
          </p>
          <p className="bio">
            I'm looking forward to honing my development skills in a team
            environment, while bringing my previously developed skills to the
            table too. Hope to see you soon!
          </p>
          <p className="bio">
            You can download my full CV{" "}
            <a href="./GYeomans_CV.pdf" download>
              {" "}
              here
            </a>
          </p>
        </main>
      )}
    </>
  );
};

export default AboutMe;
