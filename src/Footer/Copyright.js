import React, { Component } from "react";
import "./style/copyright.css";

class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <h3>Sotirios Dimitriou {new Date().getFullYear()} &#169;</h3>
      </div>
    );
  }
}

export default Copyright;
