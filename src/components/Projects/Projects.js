import React, { Component } from 'react';
import url from '../../images/orlcollage.png';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="Projects-header">
          <h1>Projects</h1>
        </div>
        <div className="Projects-cont">
          <div className="Cont-img">
            <a href="https://olichangroot.herokuapp.com/">
              <img src={ url } />
            </a>
          </div>
          <div className="Cont-body">
            <h3>
              <span className="b-text">
              Oliver Ramos </span>
              Photography 
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
