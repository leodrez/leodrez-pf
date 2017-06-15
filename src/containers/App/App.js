import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Body from '../../containers/Body/Body';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import LoadScreen from '../../components/LoadScreen/LoadScreen';
import './App.css'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showLoadScreen: true
    }
    
    this._toggleMenu = this._toggleMenu.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showLoadScreen: false }), 2800);
  }
  
  render() {
  
    let icon = "menu";

    if (this.state.showMenu) {
      icon = "clear";
    }

    return (
      <div className="App">
        { this.state.showLoadScreen ? null : <Header _toggleMenu={ this._toggleMenu } icon={ icon } /> }
        { this.state.showLoadScreen ? <LoadScreen /> : this.state.showMenu ? <Menu _toggleMenu={ this._toggleMenu }/> : <Body /> }
        { this.state.showLoadScreen ? null : <Footer /> }
      </div>
    );
  }
  
  _toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  }

  _

}

export default App;
