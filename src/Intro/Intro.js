import React, { Component } from "react";
import "./style/intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="intro flex">
        <div className="text">My Name is Soto</div>
        <img src="./images/project/profile_transparent.png" alt="" />
      </div>
    );
  }
}

export default Intro;
