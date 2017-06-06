import React, { Component } from 'react';
import Nav from '../../containers/Nav/Nav.js';
import Menu from '../Menu/Menu.js';
import './Header.css';

class Header extends Component {

  constructor () {
    super();

    this.state = {
      showMenu: false
    };

    this._getMenu = this._getMenu.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._getNav = this._getNav.bind(this);
  }

  render() {

  let nav = this._getNav();
  let menu = this._getMenu();
  let MenuBtn = nav;

  if (this.state.showMenu) {
    MenuBtn = menu;
  }
  
    return (
      <div className="Header">
        <div className="Header-nav">
          <button className="Menu-btn" onClick={ this._handleClick }>
            { MenuBtn }
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
  
  _getNav() {
    return (
      <Nav />
    );
  }

  _getMenu() {
    return (
      <Menu />
    );
  }

  _handleClick() {
    return (
      this.setState({ showMenu: true })
    );
  }
}

export default Header;
