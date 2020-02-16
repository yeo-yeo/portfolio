import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#202020" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              style={{ textDecoration: "none", color: "#202020" }}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "#202020" }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#202020" }}
            >
              Contact
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Nav;
