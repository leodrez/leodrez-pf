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
            <p>My name is Leonardo Andres Calderón, I’m a Web Developer based on Puerto Rico.
Mainly self taught and bootcamp graduate.
Creative solution provider as freelance developer. Give me a chance to bring your ideas to life.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
