import React, { Component } from 'react'
import style from './index.css'
import GridContainer from '../../components/GridContainer'
import PlayerContainer from '../../components/PlayerContainer'
import ButtonComponent from '../../components/Buttons'
import Scoreboard from '../../components/Scoreboard'

export default class HomeScreen extends Component {
  render() {
    return (
      <GridContainer>
        <PlayerContainer/>
        <ButtonComponent label = "New Game"></ButtonComponent>
        <Scoreboard/>
      </GridContainer>
    );
  }
}
