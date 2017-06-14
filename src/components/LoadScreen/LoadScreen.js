import React, { Component } from 'react';
import url from '../../leodrez-logo.svg';
import './LoadScreen.css'

class LoadScreen extends Component {
  render() {
    return (
      <div className="LoadScreen" id="loadScreen">
        <object>
          <embed src={ url } />
        </object>
      </div>
    );
  }
}

export default LoadScreen;
