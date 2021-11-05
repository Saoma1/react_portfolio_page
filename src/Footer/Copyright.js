import React, { Component } from "react";
import "./style/copyright.css";

class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <h3> Copyright &#169; {new Date().getFullYear()} Sotirios Dimitriou</h3>
      </div>
    );
  }
}

export default Copyright;
