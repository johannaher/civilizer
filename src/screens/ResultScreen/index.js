import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { Redirect } from 'react-router-dom'
import { civilizations } from '../../api'
import civList from './mocks/civs.js'
import playerList from './mocks/players.js'
import { shuffle } from './utilities'
import Choice from './components/Choice'

export default class ResultsScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: props.location.state.users,
      civilizations: props.location.state.civilizations,
      results: [],
    }
  }

  randomize(){
    let shuffledCivs = shuffle(this.state.civilizations)
    let nrOfChoices = Math.floor(this.state.civilizations.length/this.state.users.length)
    let index = 0;
    this.state.users.map((user)=>{
      user.choices = []
      for( let i = 0 ; i < nrOfChoices ; i++ ){
        user.choices.push(shuffledCivs[index])
        index++
      }
      this.state.results.push(user)
    })
  }

  componentWillMount(){
    this.randomize()
  }


  render() {
<<<<<<< HEAD
    console.log("SELECTEDCIVS", this.props.selectedCivs);
    console.log("SELECTEDUSERS", this.props.selectedUsers);

    if(!sessionStorage.isLoggedIn){
=======
    if(sessionStorage.isLoggedIn==='false'){
>>>>>>> 87d26e0c2e2181d82e73f905ae328a2f6c4b0e14
      return <Redirect to='/LoginScreen'/>
    }
    return (
      <GridContainer>
<<<<<<< HEAD
        <GamePlayersContainer userList = {this.state.selectedUsers}/>
        <Tables civilizationList = {this.state.selectedCivs}/>

=======
>>>>>>> 87d26e0c2e2181d82e73f905ae328a2f6c4b0e14
        {this.state.results.map((result) => {
          return <Choice {...result} />
        })}
      </GridContainer>
    );
  }
}
