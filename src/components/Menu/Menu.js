import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Menu-body">
          <button>Leodrez</button>
          <button>About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
        <div className="Menu-footer">
        </div>
      </div>
    );
  }
}

export default Menu;
