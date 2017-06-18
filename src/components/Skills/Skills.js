import React, { Component } from 'react';
import url from '../../images/img4.JPG';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="Skills" id="skills">
        <div className="Body-img">
          <img src={ url } alt="" />
        </div>
        <div className="Body-head">
          <h1>
            Skills & <br />
            <span className="b-text">Services</span>
          </h1>
        </div>
        <div className="Body-cont">
          <div className="Development">
            <h3>Development</h3>
            <p>
              Software development using the latest technologies 
              and best practices on the market to make your dream 
              product a reality.
            </p>
          </div>
          <div className="Design">
            <h3>Design</h3>
            <p>
              UX, UI, Web, App and e-mail design. Custom built 
              with your customers in mind to reach the best user 
              experience possible.
            </p>
          </div>
          <div className="What-i-do">
            <h3>What can I do?</h3>
            <p>
              Basically I can design and build software that lives 
              on the web, from websites and web apps to  landing pages.
               Oh and those fancy emails that companies send you?
               I can make those too. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
