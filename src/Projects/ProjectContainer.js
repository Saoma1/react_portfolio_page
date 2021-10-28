import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { createRepos } from "./services/fetch";

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
      <div>
        <h1>Prejects</h1>
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
    );
  }
}

export default ProjectContainer;
