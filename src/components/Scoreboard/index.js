import React, { Component } from 'react'
import Style from "./index.css"
import { highScores } from '../../api'
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Scoreboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      scoreList: [],
      fetchSuccess: false,
    }
  }

  componentWillMount(props){
    highScores(this.setHighScores.bind(this))

  }

  setHighScores(data){
    if(data.success){
      this.setState({
        scoreList: data.scores,
        fetchSuccess: true,
      })
    } else {
      console.log("Didn't get any highscores ", data.message)
    }
  }

  scoreList(){
    if(this.state.fetchSuccess){
      return( this.state.scoreList.map((highScore,index)=>{
        return(
          <div className = "scoreboard-item">
            <p>#{index + 1}</p>
            <p><img className = "user-img" src={highScore.imgUrl}/>
            <br/>{highScore.name}</p>
            <p>{highScore.score}</p>
          </div>
        )
      }))
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
    console.log(this.state)

    return (
      <div className = "grid-scoreboard">
        {this.scoreList()}
      </div>
    );
  }
}
