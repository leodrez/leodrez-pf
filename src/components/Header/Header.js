import React, { Component } from 'react';

import './Header.css';
import url from '../../leodrez-logo.svg';

class Header extends Component {
  render() {
    return (
      <div className={"Header" +  " " + this.props.hideClass}>
        <div className="lc">
          <a href="#">
            <h2 onClick={ this.props._toggleMenu }>LC</h2>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
