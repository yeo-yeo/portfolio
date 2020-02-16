import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutme">About Me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Nav;
