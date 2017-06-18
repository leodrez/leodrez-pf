import React, { Component } from 'react';
import './Body.css'
import Home from '../../components/Home/Home.js';
import About from '../../components/About/About.js';
import Skills from '../../components/Skills/Skills.js';
import Projects from '../../components/Projects/Projects.js';
import Contact from '../../components/Contact/Contact.js';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Body;
