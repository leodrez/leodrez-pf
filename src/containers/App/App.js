import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Body from '../../containers/Body/Body';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import './App.css'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      showMenu: false
    }
    
    this._toggleMenu = this._toggleMenu.bind(this);
  }

  render() {
  
    let icon = "menu";

    if (this.state.showMenu) {
      icon = "clear";
    }

    return (
      <div className="App">
        <Header _toggleMenu={ this._toggleMenu } icon={ icon } />
        { this.state.showMenu ? <Menu /> : <Body /> }
        <Footer />
      </div>
    );
  }
  
  _toggleMenu() {
      this.setState({ showMenu: !this.state.showMenu })
  }

}

export default App;
