import React, { Component } from 'react';
import Nav from '../../containers/Nav/Nav.js';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-nav">
          <button className="Menu-btn" onClick={ this.props._toggleMenu }>
            <Nav />
          </button>
        </div>
        <div className="Btns">
          <button className="Leodrez-btn">
            Leodrez
          </button>
          <button className="About-btn">
            About
          </button>
          <button className="Projects-btn">
            Projects
          </button>
          <button className="Contact-btn">
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
