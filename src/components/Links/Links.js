import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        <ul className="Links-list">
          <li>
            <a href="https://github.com/leodrez" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/leodrez/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </li>
          <li>
            <a href="https://twitter.com/leodrez" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links
