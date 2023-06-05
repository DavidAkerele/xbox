import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Specs from "./components/Specs/Specs";
import Dreams from "./components/Dreams/Dreams";
import Optimized from "./components/Optimized/Optimized";
import Control from "./components/Control/Control";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Specs />
        <Dreams />
        <Optimized />
        <Control />
      </div>
    );
  }
}

export default App;
