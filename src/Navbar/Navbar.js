import React, { Component } from "react";
import Theme from "./Theme";
import "./style/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar container">
        <h2>&lt;/&gt;</h2>
        <Theme />
      </div>
    );
  }
}

export default Navbar;
