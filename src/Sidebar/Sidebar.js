import React, { Component } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./style/sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="icons">
          <a href="https://github.com/Saoma1" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href="https://de.linkedin.com/in/sotirios-dimitriou" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
