import React, { Component } from 'react'
import style from './index.css'
import PlayerContainer from '../PlayerContainer'
import scoreList from "../MockScore"
import { users } from '../../api'

export default class GamePlayersContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      scoreList: [],
    }
  }

  componentWillMount(props){
    users(this.setUsers.bind(this))
  }

  setUsers(data){
    if(data.success){
      this.setState({scoreList: data.users})
    } else {
      console.log("Didn't get any users ", data.message)
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
