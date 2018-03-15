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
          <div className=" test">
            <div className="grid-item" id="background2-img">
            </div>
            <div className="grid-item" id="background3-none">
              <ButtonComponent href = "/creategamescreen" label = "New Game"></ButtonComponent>
            </div>
            <div className="grid-item" id="background-img">
            </div>
          </div>
          <Headers label="HIGHSCORES"/>

          <Scoreboard/>
          <ButtonComponent label ="Previous games and scores" href={{pathname: "/games"}}/>
        </div>
      </GridContainer>

    );
  }
}
