import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { Redirect, Link } from 'react-router-dom'
import {civilizations, users} from '../../api'
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export default class CreateGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      civilizationList: [],
      userList: [],
      selectedUsers: [],
      selectedCivs: [],
      fetchSuccessCivs: false,
      fetchSuccessUsers: false,
    }

  }

  componentWillMount(props){
    civilizations(this.setCivilizationList.bind(this))
    users(this.setUserList.bind(this))
  }

  setCivilizationList(data){
    if(data.success){
      this.setState({
        civilizationList: data.civilizations,
        fetchSuccessCivs: true,
      })
    } else {
      console.log("Didn't get any civs ", data.message)
    }
  }

  setUserList(data){
    if(data.success){
      this.setState({
        userList: data.users,
        fetchSuccessUsers: true,
      })
    } else {
      console.log("Didn't get any users ", data.message)
    }
  }
  render() {
    return (

        <GridContainer location="Create">

          <Header label= "Choose Contending Players" />
          {(this.state.fetchSuccessUsers) ?
            <GamePlayersContainer userList = {this.state.userList} selectedUsers = {this.state.selectedUsers}/>
            : <Loader/>
          }
          <Header label = "Choose Civilizations"/>
          {(this.state.fetchSuccessCivs) ?
            <Tables civilizationList = {this.state.civilizationList} selectedCivs = {this.state.selectedCivs}/>:
            <Loader/>
          }
          <ButtonComponent label = "CIVILIZE" href={{pathname: "/Results", state: {users: this.state.selectedUsers, civilizations: this.state.selectedCivs}}}/>

        </GridContainer>
    );
  }
}


const Loader = () => {
  return(
    <div className="loadingContainer">
    <MuiThemeProvider>
    <CircularProgress size={60} thickness={7} />
    </MuiThemeProvider>
    </div>
  )
}
