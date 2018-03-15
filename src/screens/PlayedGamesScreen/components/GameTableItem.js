import React, { Component } from 'react'
import style from './index.css'
import {userById, civById} from '../../../api'

export default class GameTableItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      userid: props.playerInfo.userid,
      civid: props.playerInfo.civid,
      score: props.playerInfo.score,
      user: undefined,
      civ: undefined,
    }
  }

  componentWillMount(){
    userById(this.state.userid, this.setUser.bind(this))
    civById(this.state.civid, this.setCiv.bind(this))
  }

  setUser(data){
    if(data.success){
      this.setState({user: data.user})
    } else {
      console.log("Didn't get any user ", data)
    }
  }

  setCiv(data){
    if(data.success){
      this.setState({civ: data.civilization})
    } else {
      console.log("Didn't get any civ ", data)
    }
  }

  render(){
    console.log(this.state)

    return(
      <div className = "game-score-item">
        <img className = "user-img" src={(this.state.user) ? this.state.user.imgUrl : null}/>
        <p>Player: {(this.state.user) ? this.state.user.name : null}</p>
        <img className = "civ-icon" src={(this.state.civ) ? this.state.civ.leaderImg : null}/>
        <img className = "civ-icon" src={(this.state.civ) ? this.state.civ.iconImg : null}/>
        <p>Civ: {(this.state.civ) ? this.state.civ.civilization : null}</p>
        <p>Score: {this.state.score}</p>
      </div>
    );
  }
}
