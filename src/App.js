import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/React-Portfolio/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Footer />
      </div>
    </Router>

  );
}


export default App;
