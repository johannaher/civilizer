import React, { Component } from 'react'
import Style from "./index.css"
import scoreList from "../MockScore"

export default class Scoreboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      scoreList: scoreList
    }
  }

  render() {
    console.log(this.state)

    return (
      <div className = "grid-scoreboard">
        {this.state.scoreList.map((player,index)=>{
          return(
            <div className = "scoreboard-item">
              <p>#{index + 1}</p>
              <p><img className = "user-img" alt = "player.name"/><br/>{player.name}</p>
              <p>{player.avgScore}</p>
            </div>
            )
        })}
      </div>
    );
  }
}
