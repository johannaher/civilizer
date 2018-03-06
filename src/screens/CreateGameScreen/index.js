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

        <ButtonComponent></ButtonComponent>
        <Tables/>
      </GridContainer>
    );
  }
}
