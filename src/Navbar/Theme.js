import React, { Component } from "react";
// import { CgSun } from "react-icons/cg";
// import { HiMoon } from "react-icons/hi";
import "./style/theme.css";

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Enable Dark Mode!", color: "" };
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange = (evt) => {
    if (evt.target.checked) {
      document.body.setAttribute("data-theme", "dark");
      this.setState({ text: "Enable Light Mode!" });
    } else {
      document.body.setAttribute("data-theme", "light");
      this.setState({ text: "Enable Dark Mode!" });
    }
    let lineColor = getComputedStyle(document.body).getPropertyValue("--sidebar-color");
    if (typeof InstallTrigger === "undefined") {
      lineColor = lineColor.substring(1);
    }
    console.log(`.${lineColor}`);
    this.props.colorChange(lineColor);
  };

  render() {
    return (
      <div onChange={this.handelChange} className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          <div className="slider round"></div>
        </label>
        <em>{this.state.text}</em>
      </div>
    );
  }
}

export default Theme;
