import React, { Component } from "react";

class GithubCard extends Component {
  render() {
    const { title, description, img, repoPage, repoUrl } = this.props;
    return (
      <div>
        <a href={repoUrl} target="_blank" rel="noreferrer">
          <h2 className="project-title">{title}</h2>
        </a>
        <p className="card-body">{description}</p>
      </div>
    );
  }
}

export default GithubCard;
