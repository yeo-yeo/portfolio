import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cats from "./components/Cats";

function App() {
  const [showCats, setShowCats] = React.useState(false);

  const sequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];

  const currentKey = React.useRef(0);

  const konami = event => {
    if (event.key === sequence[currentKey.current]) {
      if (currentKey.current === 9) {
        setShowCats(true);
        currentKey.current = 0;
      } else {
        currentKey.current++;
      }
    } else {
      setShowCats(false);
      currentKey.current = 0;
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("keydown", event => konami(event));
    return document.body.removeEventListener("keydown", event => konami(event));
  }, []);

  return (
    <Router>
      {showCats && <Cats />}
      <Nav />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/aboutme" render={() => <AboutMe />} />
      <Route exact path="/projects" render={() => <Projects />} />
      <Route exact path="/contact" render={() => <Contact />} />
    </Router>
  );
}

export default App;