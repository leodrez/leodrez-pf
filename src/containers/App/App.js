import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Body from '../../containers/Body/Body';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
