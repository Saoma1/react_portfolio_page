import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="container full">
        <div className="title" name="about">
          <h2>
            Skills & <br />
            Experience
          </h2>
        </div>
        <div className="pd">
          <p>
            A couple of years now I have been looking to change my career and follow my passion as a developer. This started out by teaching myself
            python which was shortly followed by PostgreSQL. At my previous job I was excited to be able to utilize my abilities for the first time,
            soon I was building complex queries that finally allowed the company to visualize their data.
          </p>
          <br />
          <p>
            That was it, I was hooked. After that I saw that I wanted to pursue this path full time. A couple of months latter I enrolled in the 10
            week full-stack developer bootcamp from Le Wagon. There I learning a plethora of languages and tools including HTML, CSS, JavaScript ES6,
            Ruby & Ruby on Rails (including the MVC-Framework), SQL, git & GitHub, Heroku and more.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
