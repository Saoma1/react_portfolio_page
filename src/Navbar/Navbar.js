import React, { Component } from "react";
import Theme from "./Theme";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import { HiOutlineDownload } from "react-icons/hi";
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
      <div className="nabar_wrapper flex sticky">
        <div className="navbar container pd">
          <h2>&lt;/&gt;</h2>
          <ul className="nav_links flex" id={this.state.active ? "nav_active" : null}>
            <li>
              <Link
                onClick={this.handleClose}
                className="nav_link"
                activeClass="active"
                to="home"
                offset={-80}
                spy={true}
                smooth={true}
                duration={500}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleClose}
                className="nav_link"
                activeClass="active"
                to="about"
                offset={-40}
                spy={true}
                smooth={true}
                duration={500}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleClose}
                className="nav_link"
                activeClass="active"
                to="work"
                offset={-40}
                spy={true}
                smooth={true}
                duration={500}
              >
                work
              </Link>
            </li>
            <li>
              <Link
                onClick={this.handleClose}
                className="nav_link"
                activeClass="active"
                to="contact"
                offset={-40}
                spy={true}
                smooth={true}
                duration={500}
              >
                contact
              </Link>
            </li>
          </ul>
          <div className="flex-n">
            <Theme colorChange={this.handleColorChange} />
            <button className="resume_btn">
              <a className="flex" href="./assets/Sotirios Dimitriou CV.pdf" target="_blank" download>
                <HiOutlineDownload /> resume
              </a>
            </button>
            <Hamburger className="menu" onToggle={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
