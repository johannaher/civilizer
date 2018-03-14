import React, { Component } from 'react'
import style from './index.css'
import PlayerContainer from '../PlayerContainer'
export default class GamePlayersContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      userList: props.userList,
    }
  }

  componentWillReceiveProps(props){
    this.setState({userList: props.userList});
  }

  render() {
    console.log(this.state)
    return (
      <div className = "player-grid">
        {this.state.userList.map((player,index)=>{
          return(
            <PlayerContainer user = {player} selectedUsers = {this.props.selectedUsers}/>
          )
        })}
      </div>
    );
  }
}
