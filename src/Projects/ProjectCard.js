import React, { Component } from "react";
import { BiLink } from "react-icons/bi";

class GithubCard extends Component {
  render() {
    const { title, description, img, repoPage, repoUrl } = this.props;
    return (
      <div>
        <h2 className="project-title">{title}</h2>
        <p className="card-body">{description}</p>
        <a href={repoUrl} target="_blank" rel="noreferrer">
          <BiLink />
        </a>
      </div>
    );
  }
}

export default GithubCard;
