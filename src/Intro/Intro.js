import React, { Component } from "react";
// import Particles from "./animation/Particles";
import Particles2 from "./animation/Particles2";
import "./style/intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="intro flex">
        <div>
          <Particles2 mainColor={this.props.mainColor} />
        </div>
        {/* <div className="text">My Name is Soto</div> */}
        {/* <img src="./images/project/profile_transparent.png" alt="" /> */}
        {/* <img src="./images/project/me.png" alt="" /> */}
      </div>
    );
  }
}

export default Intro;
