import React, { Component } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import "./style/modal.css";

class CardModal extends Component {
  static defaultProps = { btn: true };

  render() {
    const { onClose, display, title, description, repoUrl, repoPage, repoImg, btn } = this.props;

    if (display) {
      return (
        <div className="modal flex" onClick={onClose}>
          <div className="modal_content flex" onClick={(e) => e.stopPropagation()}>
            <div className="modal_image" style={{ backgroundImage: "url(" + repoImg + ")" }}></div>
            <div className="modal_context flex">
              <div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
              <div className="link_wrapper links flex">
                <div className="links flex">
                  {btn ? (
                    <a href={repoPage} target="_blank" rel="noreferrer">
                      <button className="flex">
                        <BiLinkExternal /> Visit Page
                      </button>
                    </a>
                  ) : (
                    <a href="./" rel="noreferrer" style={{ pointerEvents: "none" }}>
                      <button className="flex">Under Development</button>
                    </a>
                  )}
                  <a className="flex" href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                  </a>
                </div>
                <ImCancelCircle onClick={onClose} className="flex size" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CardModal;
