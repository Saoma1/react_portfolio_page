import React, { Component, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import "./style/modal.css";

// useEffect(() => {
//   document.body.addEventListener("keydown", closeOnEscapeKeyDown);
//   return function cleanup() {
//     document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
//   };
// }, []);

class CardModal extends Component {
  constructor(props) {
    super(props);
    this.closeOnEscapeKeyDown = this.closeOnEscapeKeyDown.bind(this);
  }

  closeOnEscapeKeyDown = (evt) => {
    if ((evt.charCode || evt.keyCode) === 27);
    this.props.onClose();
  };

  render() {
    const { onClose, display, title, description, repoUrl, repoPage, repoImg } = this.props;

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
                  <a href={repoPage} target="_blank" rel="noreferrer">
                    <button className="flex">
                      <BiLinkExternal /> Visit Page
                    </button>
                  </a>
                  <a className="flex" href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                  </a>
                </div>
                <a href="./" className="flex">
                  <ImCancelCircle />
                </a>
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
