import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { Redirect } from 'react-router-dom'
import {civilizations, users} from '../../api'

export default class CreateGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      civilizationList: [],
      selectedUsers: [],
      userList: [],
      result: [],
    }

  }

  componentWillMount(props){
    civilizations(this.setCivilizationList.bind(this))
    users(this.setUserList.bind(this))
  }

  setCivilizationList(data){
    if(data.success){
      this.setState({civilizationList: data.civilizations})
    } else {
      console.log("Didn't get any civs ", data.message)
    }
  }

  setUserList(data){
    if(data.success){
      this.setState({userList: data.users})
    } else {
      console.log("Didn't get any users ", data.message)
    }
  }

  render() {
    if(!sessionStorage.isLoggedIn){
      return <Redirect to='/LoginScreen'/>
    }
    if(this.state.civilizationList.length <= 0){
      console.log ("Empty civilizationsList")
    }
    return (
        <GridContainer>
          <GamePlayersContainer/>
          <Header label = "Choose Civilizations"/>

          <Tables civilizationList = {this.state.civilizationList}/>

          <ButtonComponent  href = "Results" label="CIVILIZE"/>

        </GridContainer>
    );
  }
}
