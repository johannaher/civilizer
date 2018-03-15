import React, { Component } from 'react'
import style from './index.css'
import GridContainer from '../../components/GridContainer'
import PlayerContainer from '../../components/PlayerContainer'
import ButtonComponent from '../../components/Buttons'
import Scoreboard from '../../components/Scoreboard'
import { Redirect } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import {orange500, blue500} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class HomeScreen extends Component {

  logout(){
    sessionStorage.setItem('isLoggedIn',false)
  }

  render() {
    return (
      <GridContainer>
        <div className = "home-container">
          <div className=" test">
            <div className="grid-item" id="background2-img">
            </div>
            <div className="grid-item">
              <ButtonComponent href = "/creategamescreen" label = "New Game"></ButtonComponent>
            </div>
            <div className="grid-item" id="background-img">
            </div>
          </div>
          <div className="header-banner"> HIGHSCORES</div>
          <Scoreboard/>
          <ButtonComponent href="/games" label ="Previous games and scores"> </ButtonComponent>
        </div>
        <MuiThemeProvider>
          <FlatButton
            onClick={()=>this.logout()}
            className="login-button"
            label="LOGOUT"
            secondary={true}
            />
          </MuiThemeProvider>
      </GridContainer>

    );
  }
}
