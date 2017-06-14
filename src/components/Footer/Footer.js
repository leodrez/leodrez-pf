import React, { Component } from 'react';
import logo from '../../logo-lg.svg';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-cont">
          <img src={ logo } className="logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Footer;
