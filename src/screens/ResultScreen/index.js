import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { Redirect } from 'react-router-dom'
import { civilizations } from '../../api'

export default class CreateGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      civilizedPlayersList: [],
    }
  }

  render() {
    if(!sessionStorage.isLoggedIn){
      return <Redirect to='/LoginScreen'/>
    }
    return (
      <GridContainer>
        <p>Hej</p>
      </GridContainer>
    );
  }
}
