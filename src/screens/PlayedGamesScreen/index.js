import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import GameTable from './components/GameTable'
import { Redirect } from 'react-router-dom'
import { games } from '../../api'

export default class PlayedGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      games: [],
    }
  }

  componentWillMount(props){
    games(this.setGames.bind(this))
  }

  setGames(data){
    if(data.success){
      this.setState({games: data.games})
    } else {
      console.log("Didn't get any games ", data.message)
    }
  }

  render() {
    console.log(this.props.games);
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
