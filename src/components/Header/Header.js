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
          <a className="L-btn" href="#home">
          <button className="Leodrez-btn">
            Leodrez
          </button>
          </a>
          <a href="#about">
            <button className="About-btn">
              About
            </button>
          </a>
          <a href="#projects">
          <button className="Projects-btn">
            Projects
          </button>
          </a>
          <a href="#contact">
            <button className="Contact-btn">
              Contact
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
