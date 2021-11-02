import React, { Component } from "react";
import Theme from "./Theme";
import "./style/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    // this.state = { color: "" };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(color) {
    // console.log(`.${color}`);
    this.props.colorChange(color);
  }

  render() {
    return (
      <div className="navbar container pd">
        <h2>&lt;/&gt;</h2>
        <Theme colorChange={this.handleColorChange} />
      </div>
    );
  }
}

export default Navbar;
