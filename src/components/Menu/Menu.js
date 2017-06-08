import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu-body">
          <a href="#home">
            <button>Leodrez</button>
          </a>
          <a href="#about">
            <button>About</button>
          </a>
          <a href="#projects">
            <button>Projects</button>
          </a>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
        <div className="Menu-footer">
        </div>
      </div>
    );
  }
}

export default Menu;
