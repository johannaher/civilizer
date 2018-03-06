import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'

export default class CreateGameScreen extends Component {
  render() {
    return (
      <GridContainer>

        <div className = "header-container">
          <h1>HEADER</h1>
        </div>

        <div className = "center-container">
          <div className = "ButtonComponent" label = "CIVILIZE"></div>
          <Tables>
            <p> JOhanaHANSD </p>
          </Tables>
        </div>

        <div className = "footer-container">
          <h1>FOOTER</h1>
        </div>
      </GridContainer>
    );
  }
}
