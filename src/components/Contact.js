import React from "react";
import "./Contact.css";
import logoGithub from "../assets/github.svg";
import logoLinkedIn from "../assets/linkedin.svg";
import logoTwitter from "../assets/twitter.svg";

const Contact = () => {
  return (
    <main id="main-contact">
      <section>
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
            <a href="https://github.com/yeo-yeo">
              <img src={logoGithub} alt="github"></img>
            </a>
          </div>
          <div id="contact-icon">
            <a href="https://www.linkedin.com/in/gyeomans/">
              <img src={logoLinkedIn} alt="linkedin"></img>
            </a>
          </div>
          <div id="contact-icon">
            <a href="https://twitter.com/yeo_yeo_">
              <img src={logoTwitter} alt="twitter"></img>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
