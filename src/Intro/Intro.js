import React, { Component } from "react";
// import Canvas from "./animation/Particles";
import Dots from "./animation/Dots";
// import TypedText from "./typed/Typed";
import "./style/intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="intro flex container full" id="home">
        {/* <Dots mainColor={this.props.mainColor} /> */}
        {/* <TypedText /> */}
        <div className="intro_text">
          <p>Hello, my name is</p>
          <h1>Sotirios Dimitriou</h1>
          <h2>I am a passionate Developer</h2>
        </div>
        {/* <Canvas mainColor={this.props.mainColor} /> */}
      </div>
    );
  }
}

export default Intro;
