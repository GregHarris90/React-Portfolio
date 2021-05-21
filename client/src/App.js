import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Project />
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
