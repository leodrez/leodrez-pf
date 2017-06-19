import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu-body">
          <a href="#home">
            <button onClick={ this.props._toggleMenu }>Leodrez</button>
          </a>
          <a href="#about">
            <button onClick={ this.props._toggleMenu }>About</button>
          </a>
          <a href="#skills">
            <button onClick={ this.props._toggleMenu }>Skills</button>
          </a>
          <a href="#projects">
            <button onClick={ this.props._toggleMenu }>Projects</button>
          </a>
          <a href="#contact">
            <button onClick={ this.props._toggleMenu }>Contact</button>
          </a>
        </div>
        <div className="Menu-footer">
        </div>
      </div>
    );
  }
}

export default Menu;
