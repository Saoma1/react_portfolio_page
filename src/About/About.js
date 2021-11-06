import React, { Component } from "react";
import photo from "./assets/profile_pic.png";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="container full">
        <div className="title" name="about">
          <h2>About</h2>
        </div>
        <div className="pd">
          <div className="about_wrapper flex-n">
            <div className="about_text">
              <p>
                A couple of years now I have been looking to change my career and follow my passion in tech. This started out by teaching myself
                Python which was shortly followed by PostgreSQL. At my previous job I was excited to be able to utilize my abilities for the first
                time, soon I was building complex queries that finally allowed the company to visualize their data.
              </p>
              <br />
              <p>
                That was it, I was hooked. After that I saw that I wanted to pursue this path full time. A couple of months latter I enrolled in the
                10 week full-stack developer bootcamp from Le Wagon. There I learned a plethora of languages and tools including HTML, CSS, JavaScript
                ES6, Ruby & Ruby on Rails (including the MVC-Framework), SQL, git & GitHub, Heroku and much more.
              </p>
            </div>
            <div className="photo_wrapper">
              <img className="photo" src={photo} alt="" />
              <div className="photo_box"></div>
            </div>
          </div>
          <div className="skills">
            <div>
              <h3>Languages</h3>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>Ruby</li>
                <li>Python</li>
                <li>SQL(PostgreSQL)</li>
              </ul>
            </div>
            <div>
              <h3>Frameworks</h3>
              <ul>
                <li>Ruby on Rails</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <h3>Tools</h3>
              <ul>
                <li>Git & Github</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
