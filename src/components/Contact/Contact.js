import React, { Component } from 'react';
import url from '../../images/img3.JPG';
import './Contact.css'

class Contact extends Component {
  render() {
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
        </div>
      </div>
    );
  }
}

export default Contact;

