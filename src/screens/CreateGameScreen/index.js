import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'

export default class CreateGameScreen extends Component {
  render() {
    return (
        <GridContainer>
          <GamePlayersContainer/>
          <Header label="Choose Civilizations"/>
          <Tables/>
          <a href = "Results">
            <ButtonComponent label="CIVILIZE"/>
          </a>
        </GridContainer>
    );
  }
}
