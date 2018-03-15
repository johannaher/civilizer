import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import GameTable from './components/GameTable'
import { Redirect, Link } from 'react-router-dom'
import { games } from '../../api'
import Button from '../../components/Buttons'

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
        <Link to='/'><Button label="HOME"/></Link>
      </GridContainer>
    );
  }
}
