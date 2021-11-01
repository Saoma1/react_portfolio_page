import React, { Component } from "react";
import Theme from "./Theme";
import "./style/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(evt) {
    this.props.colorChange(evt);
  }

  render() {
    return (
      <div className="navbar container">
        <h2>&lt;/&gt;</h2>
        <Theme colorChange={this.handleColorChange} />
      </div>
    );
  }
}

export default Navbar;
