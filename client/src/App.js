import React, { Component } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <p>Hello World</p>
        <Footer />
      </div>
    );
  }
}

export default App;
