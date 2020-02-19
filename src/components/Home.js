import React from "react";
import "./Home.css";
import ContactIcons from "./ContactIcons";

const Home = () => {
  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => {
    setRendered(true);
  }, []);

  const [animatedEmoji, setAnimatedEmoji] = React.useState(false);

  return (
    <>
      <main
        id="main-landing"
        style={{ visibility: rendered ? "visible" : "hidden" }}
      >
        <section id="landing-section">
          <h1 id="title">Gillian Yeomans</h1>
          <h3 id="subtitle">Full-stack Software Developer</h3>
          <div
            id="emoji-container"
            onMouseEnter={() => setAnimatedEmoji(true)}
            onAnimationEnd={() => setAnimatedEmoji(false)}
          >
            <span
              role="img"
              aria-label="female coder emoji"
              className={animatedEmoji ? "animated" : ""}
            >
              👩‍💻
            </span>
          </div>
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
