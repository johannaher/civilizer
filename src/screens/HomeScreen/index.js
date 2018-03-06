import React, { Component } from 'react'
import style from './index.css'
import GridContainer from '../../components/GridContainer'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import ButtonComponent from '../../components/Buttons'

export default class HomeScreen extends Component {
  render() {
    return (
      <GridContainer>
        <GamePlayersContainer></GamePlayersContainer>
        <ButtonComponent></ButtonComponent>
      </GridContainer>
    );
  }
}
