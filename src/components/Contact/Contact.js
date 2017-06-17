import React, { Component } from 'react';
import url from '../../images/img3.JPG';
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
            <a href="mailto:leodrezz@gmail.com">leodrezz@gmail.com</a>
            <a href="tel:+1-939-232-3881">1 (939) 232-3881</a>
          </div>
        </div>
        <div className="Social">
          <div className="Social-title">
            <h3>Social</h3>
          </div>
          <div className="Links">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

