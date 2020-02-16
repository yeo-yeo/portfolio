import React from "react";
import "./Home.css";
import ContactIcons from "./ContactIcons";

const Home = () => {
  return (
    <>
      <main id="main-landing">
        <section id="landing-section">
          <h1 id="title">Gillian Yeomans</h1>
          <h3 id="subtitle">Full-stack Software Developer</h3>
          <span role="img" aria-label="female coder emoji">
            👩‍💻
          </span>
          <p id="intro">
            Former Risk Analyst, retrained as a Developer. Love learning new
            skills and technologies, and putting them to practical use with my
            business experience. Based across London and Rome. Enjoy yoga and
            crosswords.
          </p>
        </section>
      </main>
      <footer>
        <a
          href="https://github.com/yeo-yeo/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcons name="github" fill={"#000000"} />
        </a>
      </footer>
    </>
  );
};

export default Home;
