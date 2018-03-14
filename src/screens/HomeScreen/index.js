import React, { Component } from 'react'
import style from './index.css'
import GridContainer from '../../components/GridContainer'
import PlayerContainer from '../../components/PlayerContainer'
import ButtonComponent from '../../components/Buttons'
import Scoreboard from '../../components/Scoreboard'
import { Redirect } from 'react-router-dom'

export default class HomeScreen extends Component {
  render() {
    if(!sessionStorage.isLoggedIn){
      return <Redirect to='/LoginScreen'/>
    }
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


        </div>

        <img className="testImage" src="../../assets/images/Gov.png"/>

        <Scoreboard/>

      </GridContainer>

    );
  }
}
