import React, { Component } from "react";
import "./style/theme.css";

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Enable Dark Mode!" };
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange = (evt) => {
    console.log(evt.target.checked);
    if (evt.target.checked) {
      console.log(document.body);
      document.body.setAttribute("data-theme", "dark");
      this.setState({ text: "Enable Light Mode!" });
    } else {
      document.body.setAttribute("data-theme", "light");
      this.setState({ text: "Enable Dark Mode!" });
    }
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
