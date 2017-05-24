import React, { Component } from 'react';
import url from '../../images/img1.JPG';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-cont">
          <img src={ url } />
        </div>
        <div className="Home-txt">
          <p><span className ="w-text">Software</span><br />
          Developer</p>
        </div>
      </div>
    );
  }
}

export default Home;
