import React, { Component } from 'react'
import style from './index.css'
import PlayerContainer from '../PlayerContainer'
import scoreList from "../MockScore"

export default class GamePlayersContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      scoreList: scoreList
    }
  }

  render() {
    console.log(this.state)

    return (
      <div className = "player-grid">
        {this.state.scoreList.map((player,index)=>{
          return(
            <PlayerContainer><p>{player.name}</p></PlayerContainer>
          )
        })}
        {this.props.children}
      </div>
    );
  }
}
