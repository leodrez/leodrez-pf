import React, { Component } from 'react';
import Links from '../Links/Links.js';
import Message from '../Message/Message.js';
import url from '../../images/img3.JPG';
import './Contact.css';

class Contact extends Component {
  
  constructor() {
    super();

    this.state = {
      showForm: false
    };

    this._getLinks = this._getLinks.bind(this);
    this._getMessage = this._getMessage.bind(this);
    this._handleLinksClick = this._handleLinksClick.bind(this);
    this._handleMessageClick = this._handleMessageClick.bind(this);

  }

  render() {
  
    let links = this._getLinks();
    let message = this._getMessage(); 

    if (this.state.showForm) {
      links = message;
    }

    return (
      <div className="Contact">
        <div className="Contact-body">
          <div className="Body-img">
            <img src={ url } />
          </div>
          <div className="Body-cont">
            <h1>
              Contact
            </h1>
          </div>
          <div className="Buttons">
            <button className="link-btn" onClick={ this._handleLinksClick }>
              Links
            </button>
            <button className="message-btn" onClick={ this._handleMessageClick }>
              Message Me
            </button>
          </div>
          <div className="Body-data">
            { links }
          </div>
        </div>
      </div>
    );
  }
  
  _getLinks() {
    return (
      <Links />
    );
  }

  _getMessage() {
    return (
      <Message />
    );
  }

  _handleLinksClick() {
    this.setState({ showForm: false })
  }

  _handleMessageClick() {
    this.setState({ showForm: true })
  }

}

export default Contact;

