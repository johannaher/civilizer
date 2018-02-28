import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'

class App extends Component {
  render() {
    return (
      <GridContainer>
        <p>player 1:1</p>
        <p>player 1:2</p>
        <p>player 2:1</p>
        <p>player 2:2</p>
        <img src={logo} className = "TestImage" alt="logo"/>
        <img src={logo} className = "TestImage" alt="logo"/>
      </GridContainer>
    );
  }
}

export default App;
