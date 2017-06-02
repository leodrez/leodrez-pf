import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Message-me">
          <a href="mailto:leodrezz@gmail.com">
            leodrezz@gmail.com
          </a>
          <a href="tel://1-939-232-3881">
            +1 (939) 232-3881
          </a>
      </div>
    );
  }
}

export default Form
