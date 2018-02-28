import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer/GridContainer.js'
import style from './index.css'

class App extends Component {
  render() {
    return (
      <GridContainer>
          <img src={logo} className="TestImage" alt="logo"/>
          <img src={logo} className="TestImage" alt="logo"/>
      </GridContainer>
    );
  }
}

export default App;
