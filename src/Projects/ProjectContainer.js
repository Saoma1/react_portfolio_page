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

  static defaultProps = {
    projectCards: [
      {
        id: 1,
        name: "Tester",
        repoDescription: "Tester is a platform for solo developer or small startup that want to test new features with real users",
        repoImgUrl: "/images/project/tester.png",
        repoPage: "https://www.startup-testr.me/",
        repoUrl: "https://github.com/anthonyjshaw/tester",
      },
      {
        id: 2,
        name: "YachtMe",
        repoDescription: "YachtMe a mock up Airbnb clone where users can rent Yacht across the globe",
        repoImgUrl: "/images/project/yachtme.jpg",
        repoPage: "https://yacht-me.herokuapp.com/",
        repoUrl: "https://github.com/a-negm/yacht-me",
      },
    ],
  };

  async componentDidMount() {
    const repos = await createRepos();
    this.setState({ repos: repos });
  }

  render() {
    return (
      <div className="container full">
        <div className="tright" id="work">
          <h2>Projects</h2>
        </div>
        <div className="flex">
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
            {this.props.projectCards.map((repo) => (
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
      </div>
    );
  }
}

export default ProjectContainer;
