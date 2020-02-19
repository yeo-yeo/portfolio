import React from "react";
import "./Contact.css";
import ContactIcons from "./ContactIcons";

const Contact = () => {
  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => {
    setRendered(true);
  }, []);

  const [iconHover, setIconHover] = React.useState([false, false, false]);

  const hoverOn = ref => {
    const newArray = [false, false, false];
    newArray[ref] = true;
    setIconHover(newArray);
  };

  const hoverOff = () => {
    setIconHover([false, false, false]);
  };

  return (
    <main
      id="main-contact"
      style={{ visibility: rendered ? "visible" : "hidden" }}
    >
      <section>
        <span></span>
        <h1>I'd love to hear from you!</h1>
        <div id="email-contact">
          <h2>Drop me a line:</h2>
          <p>
            <a href="mailto:hello@gillian.tech">hello@gillian.tech</a>
          </p>
        </div>
        <h2>Or find me here:</h2>
        <div id="contact-icons">
          <div id="contact-icon">
            <a
              href="https://github.com/yeo-yeo"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => hoverOn("0")}
              onMouseLeave={() => hoverOff("0")}
            >
              <ContactIcons
                name="github"
                fill={iconHover[0] ? "#c995a2" : "#000000"}
              />
            </a>
          </div>
          <div id="contact-icon">
            <a
              href="https://www.linkedin.com/in/gyeomans/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => hoverOn("1")}
              onMouseLeave={() => hoverOff()}
            >
              <ContactIcons
                name="linkedin"
                fill={iconHover[1] ? "#c995a2" : "#000000"}
              />
            </a>
          </div>
          <div id="contact-icon">
            <a
              href="https://twitter.com/yeo_yeo_"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => hoverOn("2")}
              onMouseLeave={() => hoverOff()}
            >
              <ContactIcons
                name="twitter"
                fill={iconHover[2] ? "#c995a2" : "#000000"}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
