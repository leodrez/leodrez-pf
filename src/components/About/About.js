import React, { Component } from 'react';
import url from '../../images/img2.JPG';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="About-header">
          <h1>
            Leonardo<br/> 
            <span className="w-text">Calderón</span>
          </h1>
        </div>
        <div className="About-img">
          <img src={ url } alt="" />
        </div>
        <div className="About-cont">
          <div className="Cont-head">
            <h3>About</h3>
          </div>
          <div className="Cont-body">
            <p>
              My name is Leonardo Andres Calderón, I’m a Full Stack Software 
              Developer and Web Designer with a Marketing and Sales background. 
              Focused mainly on web based projects and applications, from initial 
              design to final development. Creative solution provider as 
              freelance developer and web designer. Give me a chance to bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
