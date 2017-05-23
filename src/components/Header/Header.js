import React, { Component } from 'react';
import Nav from '../../containers/Nav/Nav.js';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-cont">
          <Nav />
        </div>
        <div className="leodrez">
          <p>Leodrez</p>
        </div>
      </div>
    );
  }
}

export default Header;
