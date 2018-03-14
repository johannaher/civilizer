import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import games from './mocks/games.js'
import GameTable from './components/GameTable'
import { Redirect } from 'react-router-dom'

export default class PlayedGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      games: games,
    }
  }

  render() {
    if(sessionStorage.isLoggedIn==='false'){
      return <Redirect to='/LoginScreen'/>
    }
    return (
      <GridContainer>

        {this.state.games.map((game) => {
          return<GameTable {...game}/>
        })}
      </GridContainer>
    );
  }
}
