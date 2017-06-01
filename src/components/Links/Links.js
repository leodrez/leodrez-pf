import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        <ul className="Links-list">
          <li>
            <p>leodrezz@gmail.com</p>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links
