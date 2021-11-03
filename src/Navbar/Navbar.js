import React, { Component } from "react";
import Theme from "./Theme";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import "./style/navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleColorChange(color) {
    this.props.colorChange(color);
  }

  handleClick() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  handleClose() {
    const hamburger = document.querySelector(".hamburger-react");
    hamburger.click();
    this.setState({ active: false });
  }

  render() {
    return (
      <div className="navbar container pd">
        <h2>&lt;/&gt;</h2>
        <ul className="nav_links flex" id={this.state.active ? "nav_active" : null}>
          <li>
            <Link onClick={this.handleClose} className="nav_link" activeClass="active" to="about" spy={true} smooth={true} duration={500}>
              about
            </Link>
          </li>
          <li>
            <Link onClick={this.handleClose} className="nav_link" activeClass="active" to="work" spy={true} smooth={true} duration={500}>
              work
            </Link>
          </li>
          <li>
            <Link onClick={this.handleClose} className="nav_link" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
              contact
            </Link>
          </li>
        </ul>
        <div className="flex-n">
          <Theme colorChange={this.handleColorChange} />
          <Hamburger className="menu" onToggle={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Navbar;
