import React, { Component } from 'react'
import Style from "./index.css"
import { highScores } from '../../api'

export default class Scoreboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      scoreList: [],
    }
  }

  componentWillMount(props){
    highScores(this.setHighScores.bind(this))
  }

  setHighScores(data){
    if(data.success){
      this.setState({scoreList: data.scores})
    } else {
      console.log("Didn't get any highscores ", data.message)
    }
  }

  render() {
    console.log(this.state)

    return (
      <div className = "grid-scoreboard">
        {this.state.scoreList.map((highScore,index)=>{
          return(
            <div className = "scoreboard-item">
              <p>#{index + 1}</p>
              <p><img className = "user-img" src={highScore.imgUrl}/>
              <br/>{highScore.name}</p>
              <p>{highScore.score}</p>
            </div>
            )
        })}
      </div>
    );
  }
}
