import React, { Component } from 'react';
import url from '../../images/img3.JPG';
import logo from '../../leodrez-logo.svg';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="contact">
        <div className="Contact-body">
          <div className="Body-img">
            <img src={ url } alt="" />
          </div>
          <div className="Body-cont">
            <h1>
              Contact
            </h1>
          </div>
        </div>
        <div className="Contact-info">
          <div className="Contact-p">
            <p>
              I’m always interested in working on new projects.
              Contact me if you would like to work together or just say hi.
            </p>
          </div>
          <div className="Info-pm">
            <a href="mailto:me@leonardocalderon.com">me@leonardocalderon.com</a>
            <a href="tel:+1-939-232-3881">1 (939) 232-3881</a>
          </div>
        </div>
        <div className="Social">
          <div className="Social-title">
            <h3>Social</h3>
          </div>
          <div className="Links">
            <a href="https://github.com/leodrez" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/leodrez/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://www.instagram.com/leodrezz/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com/leodrez" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="Logo">
          <a href="#">
            <img src={ logo } className="logo-svg" alt="logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;

