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
      results: this.randomize(props.location.state.users, props.location.state.civilizations),
      successfulSubmit: false,
    }
  }

  randomize( users, civilizations ){
    let shuffledCivs = shuffle(civilizations)
    let nrOfChoices = Math.floor(civilizations.length/users.length)
    let index = 0;
    let results = [];
    users.map((user)=>{
      user.choices = []
      user.decided = null
      user.score = 0;
      for( let i = 0 ; i < nrOfChoices ; i++ ){
        user.choices.push(shuffledCivs[index])
        index++
      }
      results.push(user)
    })
    return results;
  }


  submitScores(){
    let time = moment().format()
    let success;
    this.state.results.map((result) => {
      scoreAdd(this.state.gameId, result.id, result.decided, result.score, time, ()=>{})
    })
  }

  render() {
    if(this.state.users.length < 1 || this.state.civilizations.length < this.state.users.length){
      return(
        <GridContainer>
          <p className="errorText">Too few users or civilizations to randomize!</p> 
          <div className="g-background"> </div>
        </GridContainer>)
    }
    return (
      <GridContainer>
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
