import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
// import { createRepos } from "./services/fetch";
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
      {
        id: 3,
        name: "Watch List",
        repoDescription: "A small application to keep track of the movies you love, 3 model full-stack web app with rails",
        repoImgUrl: "/images/project/rails-watch.jpg",
        repoPage: "https://my-movie-watch-list-app.herokuapp.com/",
        repoUrl: "https://github.com/Saoma1/rails-watch-list",
      },
      {
        id: 4,
        name: "Handsome Tip Calculator",
        repoDescription:
          "An awesome little tool to split the tip evenly among your company of friends. No more headaches that comes with the check!!",
        repoImgUrl: "/images/project/tip-calc.jpg",
        repoPage: "https://saoma1.github.io/tip-calculator-app-main/",
        repoUrl: "https://github.com/Saoma1/tip-calculator-app-main",
      },
      {
        id: 5,
        name: "Task Manager",
        repoDescription: "A simple Task Manager build with React, you can easily create tasks, delete or mark as done ",
        repoImgUrl: "/images/project/task.png",
        repoPage: "https://saoma1.github.io/react-task-manager/",
        repoUrl: "https://github.com/Saoma1/react-task-manager",
      },
      {
        id: 6,
        name: "Looper",
        repoDescription: "A website to search for your favorite upcoming movies, add them to your list and get notified when torrents are available.",
        repoImgUrl: "/images/project/looper.jpg",
        repoPage: "https://saoma1.github.io/rails-movie-checker",
        repoUrl: "https://github.com/Saoma1/rails-movie-checker",
        btn: false,
      },
    ],
  };

  // async componentDidMount() {
  //   const repos = await createRepos();
  //   this.setState({ repos: repos });
  // }

  render() {
    return (
      <div className="container full" id="work">
        <div className="tright">
          <h2>Projects</h2>
        </div>
        <div className="flex">
          <div className="project_container flex">
            {/* {this.state.repos.map((repo) => (
              <ProjectCard
                key={repo.id}
                title={repo.name}
                description={repo.repoDescription}
                img={repo.repoImgUrl}
                repoPage={repo.repoPage}
                repoUrl={repo.repoUrl}

              />
            ))} */}
            {this.props.projectCards.map((repo) => (
              <ProjectCard
                key={repo.id}
                title={repo.name}
                description={repo.repoDescription}
                img={repo.repoImgUrl}
                repoPage={repo.repoPage}
                repoUrl={repo.repoUrl}
                btn={repo.btn}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
