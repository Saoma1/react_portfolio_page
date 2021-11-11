import React, { Component } from "react";
import "./style/theme.css";

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: localStorage.getItem("data-theme") === "light" ? "" : "true",
    };
    this.handelChange = this.handelChange.bind(this);
  }

  componentDidMount() {
    let theme = localStorage.getItem("data-theme");
    document.body.setAttribute("data-theme", theme);
  }

  handelChange = (evt) => {
    if (evt.target.checked) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("data-theme", "light");
    }

    let lineColor = getComputedStyle(document.body).getPropertyValue("--sidebar-color");
    if (typeof InstallTrigger === "undefined") {
      lineColor = lineColor.substring(1);
    }
    this.props.colorChange(lineColor);
  };

  render() {
    return (
      <div onChange={this.handelChange} className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" defaultChecked={this.state.checked} />
          <div className="slider round"></div>
        </label>
      </div>
    );
  }
}

export default Theme;
