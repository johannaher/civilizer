import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import GameTable from './components/GameTable'
import { Redirect, Link } from 'react-router-dom'
import { games } from '../../api'
import Button from '../../components/Buttons'
import Headers from '../../components/Headers'
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class PlayedGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      games: [],
      fetchSuccess: false,
    }
  }

  componentWillMount(props){
    games(this.setGames.bind(this))
  }

  setGames(data){
    if(data.success){
      this.setState({
        games: data.games,
        fetchSuccess: true,
      })
    } else {
      console.log("Didn't get any games ", data.message)
    }
  }

  games(){
    if(this.state.fetchSuccess) {
      return (
        this.state.games.map((game) => {
          return<GameTable {...game}/>
        })
      )
    } else {
      return(
        <div className="loadingContainer">
        <MuiThemeProvider>
        <CircularProgress size={60} thickness={7} />
        </MuiThemeProvider>
        </div>
      )
    }
  }

  render() {
      return (
        <GridContainer location="PreviousGames">
          <Headers label = "Previous Game Results"/>
          {this.games()}
          <Button label="HOME" href='/'/>
        </GridContainer>
      );
  }
}
