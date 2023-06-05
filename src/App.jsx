import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Specs from "./components/Specs/Specs";
import Dreams from "./components/Dreams/Dreams";
import Optimized from "./components/Optimized/Optimized";
import Control from "./components/Control/Control";
import Perfect from "./components/Perfect/Perfect";
import Series from "./components/Series/Series";
import Footer from "./components/Footer/Footer";


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
        <Perfect />
        <Series />

        <Footer />
      </div>
    );
  }
}

export default App;
