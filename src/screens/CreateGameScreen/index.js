import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { Redirect } from 'react-router-dom'

export default class CreateGameScreen extends Component {
  render() {
    if(!sessionStorage.isLoggedIn){
      return <Redirect to='/LoginScreen'/>
    }
    return (
        <GridContainer>
          <GamePlayersContainer/>
          <Header label="Choose Civilizations"/>
          <Tables/>

          <ButtonComponent  href = "Results" label="CIVILIZE"/>

        </GridContainer>
    );
  }
}
