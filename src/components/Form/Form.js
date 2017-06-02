import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Message-me">
        <div className="Phone">
          <a href="tel://1-939-232-3881">
            +1 (939) 232-3881
          </a>
        </div>
      </div>
    );
  }
}

export default Form
