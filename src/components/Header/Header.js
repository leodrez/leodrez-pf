import React, { Component } from 'react';
import logo from '../../logo-md.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-cont">
          <i className="material-icons">&#xE5D2;</i>
        </div>
        <div className="leodrez">
          <p>Leodrez</p>
        </div>
      </div>
    );
  }
}

export default Header;
