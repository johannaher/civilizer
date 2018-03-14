import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { Redirect, Link } from 'react-router-dom'
import {civilizations, users} from '../../api'

export default class CreateGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      civilizationList: [],
      userList: [],
      selectedUsers: [],
      selectedCivs: [],
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
          <GamePlayersContainer userList = {this.state.userList} selectedUsers = {this.state.selectedUsers}/>
          <Header label = "Choose Civilizations"/>

          <Tables civilizationList = {this.state.civilizationList} selectedCivs = {this.state.selectedCivs}/>

          <Link to="/Results" selectedUsers = {this.state.selectedUsers} selectedCivs = {this.state.selectedCivs}>
            <ButtonComponent label = "CIVILIZE"/>
          </Link>

        </GridContainer>
    );
  }
}
