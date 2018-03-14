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

<<<<<<< HEAD
              <ButtonComponent href = "/creategamescreen" label = "New Game"></ButtonComponent>

<<<<<<< HEAD
              <div id="Gov"/>
              <div className="figure-image" id="Magnus"/>
=======
          </div>

          <img className="testImage" src="../../assets/images/Gov.png"/>
>>>>>>> 80ac97b581e0520ee06ec261845e68e08765a8aa

=======
          <div className=" test">
            <div className="grid-item">

            </div>
            <div className="grid-item">
              <ButtonComponent href = "/creategamescreen" label = "New Game"></ButtonComponent>
            </div>
            <div className="grid-item" id="background-img">
            </div>
          </div>
>>>>>>> 3d14a68710a70938b536f2e32e8ebad581de1829
          <Scoreboard/>

        </div>

      </GridContainer>

    );
  }
}
