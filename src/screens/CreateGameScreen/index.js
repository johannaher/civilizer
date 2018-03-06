import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'

export default class CreateGameScreen extends Component {
  render() {
    return (
      <GridContainer>
        <GamePlayersContainer></GamePlayersContainer>
        <Tables/>
        <ButtonComponent label="CIVILIZE"></ButtonComponent>
        </GridContainer>
    );
  }
}
