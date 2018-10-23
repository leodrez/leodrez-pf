import React, { Component } from "react";
import url from "../../images/img2.JPG";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="About-header">
          <h1>
            About
            <br />
            <span className="w-text">Me</span>
          </h1>
        </div>
        <div className="About-img">
          <img src={url} alt="" />
        </div>
        <div className="About-cont">
          <div className="Cont-head">
            <h3>Hello</h3>
          </div>
          <div className="Cont-body">
            <p>
              My name is Leonardo Andres Calderón, I’m a Software Engineer and
              Passionate Designer with a Marketing and Sales background. Focused
              mainly on web based applications. From the initial planning,
              design and architecture of a project to its deployment, I have
              proof of skill on each step in between. Creative solution provider
              and software consultant-(ish). Lets talk.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
