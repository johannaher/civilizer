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

        <div className = "home-container">

          <div>
            <PlayerContainer>"player.name"</PlayerContainer>

              <ButtonComponent href = "/creategamescreen" label = "New Game"></ButtonComponent>

          </div>

          <Scoreboard/>

        </div>

      </GridContainer>

    );
  }
}
