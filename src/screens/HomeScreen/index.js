import React, { Component } from 'react'
import style from './index.css'
import GridContainer from '../../components/GridContainer'
import PlayerContainer from '../../components/PlayerContainer'
import ButtonComponent from '../../components/Buttons'
import Scoreboard from '../../components/Scoreboard'
import { Redirect, Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import {orange500, blue500} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Headers from '../../components/HeaderContainer'

export default class HomeScreen extends Component {


  render() {
    return (
      <GridContainer location="home">
        <div className = "home-container">
          <div className = "test">
            <img id="bg1"/>

            <div className="button-container">
              <ButtonComponent href = "/creategamescreen" label = "New Game"></ButtonComponent>
            </div>

            <img id="bg2"/>
          </div>

          <Headers label="HIGHSCORES"/>

          <Scoreboard/>
          <ButtonComponent label ="Previous games and scores" href={{pathname: "/games"}}/>
        </div>
      </GridContainer>

    );
  }
}
