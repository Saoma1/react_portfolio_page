import React, { Component } from "react";
import Canvas from "./animation/Particles";
import TypedText from "./typed/Typed";
import "./style/intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="intro flex container">
        <TypedText />
        <Canvas mainColor={this.props.mainColor} />
        {/* <img src="./images/project/profile_transparent.png" alt="" /> */}
        {/* <img src="./images/project/me.png" alt="" /> */}
      </div>
    );
  }
}

export default Intro;
