import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { Redirect, Link } from 'react-router-dom'
import { civilizations } from '../../api'
import civList from './mocks/civs.js'
import playerList from './mocks/players.js'
import { shuffle } from './utilities'
import Choice from './components/Choice'
import Button from '../../components/Buttons'
import moment from 'moment'
import { scoreAdd } from '../../api'
const uuidv4 = require('uuid/v4');

export default class ResultsScreen extends Component {

  constructor(props){
    super(props)
    this.state = {

      results: [],
      gameId: uuidv4(),
      users: props.location.state.users,
      civilizations: props.location.state.civilizations,
      results: [],
      successfulSubmit: false,
    }
  }

  randomize(){
    let shuffledCivs = shuffle(this.state.civilizations)
    let nrOfChoices = Math.floor(this.state.civilizations.length/this.state.users.length)
    let index = 0;
    this.state.users.map((user)=>{
      user.choices = []
      user.decided = null
      user.score = 0;
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

  submitScores(){
    let time = moment().format()
    let success;
    this.state.results.map((result) => {
      scoreAdd(this.state.gameId, result.id, result.decided, result.score, time, ()=>{})
    })
  }

  render() {

    console.log("SELECTEDCIVS", this.props.selectedCivs);
    console.log("SELECTEDUSERS", this.props.selectedUsers);

    if(sessionStorage.isLoggedIn==='false'){

      return <Redirect to='/LoginScreen'/>
    }

    return (
      <GridContainer>

        <GamePlayersContainer userList = {this.state.selectedUsers}/>
        <Tables civilizationList = {this.state.selectedCivs}/>

        {this.state.results.map((result) => {
          return <Choice {...result} />
        })}

        {this.state.results.map((result, index) => {
          return <Choice results={this.state.results} key={index} index={index} {...result} />
        })}
        <p className="errorText">{this.state.errorText}</p>
        <Link to='/'><div onClick={()=>this.submitScores()}><Button label="SUBMIT"/></div></Link>
        <Link to='/'><p className="noSubmit">I don´t want to submit score</p></Link>
      </GridContainer>
    );
  }
}
