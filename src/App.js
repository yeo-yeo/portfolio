import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <Nav /> <Home />
          </>
        )}
      />
      <Route
        exact
        path="/aboutme"
        render={() => (
          <>
            <Nav /> <AboutMe />
          </>
        )}
      />
      <Route
        exact
        path="/projects"
        render={() => (
          <>
            <Nav /> <Projects />
          </>
        )}
      />
      <Route
        exact
        path="/contact"
        render={() => (
          <>
            <Nav /> <Contact />
          </>
        )}
      />
    </Router>
  );
}

export default App;
