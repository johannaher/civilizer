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

              <ButtonComponent href = "/creategamescreen" label = "New Game"></ButtonComponent>

<<<<<<< HEAD
              <div id="Gov"/>
              <div className="figure-image" id="Magnus"/>
=======
          </div>

          <img className="testImage" src="../../assets/images/Gov.png"/>
>>>>>>> 80ac97b581e0520ee06ec261845e68e08765a8aa

          <Scoreboard/>

        </div>

      </GridContainer>

    );
  }
}
