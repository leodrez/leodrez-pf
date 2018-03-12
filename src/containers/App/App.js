import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Body from '../../containers/Body/Body';
import Menu from '../../components/Menu/Menu';
import LoadScreen from '../../components/LoadScreen/LoadScreen';
import './App.css'

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showLoadScreen: true,
      showHeader: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showLoadScreen: false }), 2800);
    window.addEventListener('scroll', this._toggleHeader);
  }

  _toggleHeader = () => {
    window.scrollY < this.scrollPosition ? 
    this.setState({ showHeader: true })
    : this.setState({ showHeader: false })

    this.scrollPosition = window.scrollY;
  }

  _toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
  
    let icon = "menu";
    
    let hideClass = this.state.showHeader ? '' : 'hide';

    return (
      <div className="App">
        {
          this.state.showLoadScreen ? <LoadScreen /> :
          <div>
            {
              this.state.showHeader ? <Header _toggleMenu={this._toggleMenu } icon={ icon } hideClass={ hideClass } /> : null
            }
            {
              this.state.showMenu ? <Menu _toggleMenu={ this._toggleMenu }/> : <Body />
            }
          </div>
        }
      </div>
    );
  }
}

export default App;