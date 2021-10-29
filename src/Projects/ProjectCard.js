import React, { Component } from "react";
import { BiLink } from "react-icons/bi";
import "./style/project_card.css";

class ProjectCard extends Component {
  render() {
    const { title, description, img, repoPage, repoUrl } = this.props;
    return (
      <div className="project_card">
        <div className="project_backround" style={{ backgroundImage: "url(" + img + ")" }}></div>
        <div className="project_text">
          <h2 className="project-title">{title}</h2>
          <p className="card-body">{description}</p>
        </div>
        <div className="project_buttons">
          <button>Learn More</button>
          {/* <a href={repoUrl} target="_blank" rel="noreferrer">
            <BiLink />
          </a> */}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
