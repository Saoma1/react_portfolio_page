import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { createRepos } from "./services/fetch";
import "./style/project_container.css";
import "../styles/general.css";

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  async componentDidMount() {
    const repos = await createRepos();
    this.setState({ repos: repos });
  }

  render() {
    return (
      <div className="container flex">
        <h1>{this.props.title}</h1>
        <div className="project_container flex">
          {this.state.repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.repoDescription}
              img={repo.repoImgUrl}
              repoPage={repo.repoPage}
              repoUrl={repo.repoUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
