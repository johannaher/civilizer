import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import Buttons from '../../components/Buttons'

class App extends Component {
  render() {
    return (
      <GridContainer>
          <img src={logo} className="TestImage" alt="logo"/>
          <img src={logo} className="TestImage" alt="logo"/>

          <Tables>
            <p> JOhanaHANSD </p><p> 23948</p>
          </Tables>
          <Buttons label="CIVILIZE">
          </Buttons>
      </GridContainer>
    );
  }
}

export default App;
