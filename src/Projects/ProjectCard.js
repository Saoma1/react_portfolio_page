import React, { Component } from "react";
import CardModal from "./CardModal";
import "./style/project_card.css";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ modal: true });
  };

  render() {
    const { title, description, img, repoPage, repoUrl, btn } = this.props;
    return (
      <div className="project_card_wrapper">
        <CardModal
          display={this.state.modal}
          title={title}
          description={description}
          repoUrl={repoUrl}
          repoPage={repoPage}
          repoImg={img}
          btn={btn}
          onClose={() => this.setState({ modal: false })}
        />
        <div className="project_card">
          <div className="project_backround" style={{ backgroundImage: "url(" + img + ")" }}></div>
          <div className="project_text">
            <h2 className="project-title">{title}</h2>
          </div>
          <div className="project_buttons">
            <button onClick={this.handleClick}>Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
