import React, { Component } from 'react'
import style from './index.css'
import GameTableItem from './GameTableItem.js'
import HeaderContainer from '../../../components/HeaderContainer'
import moment from 'moment'

export default class GameTable extends Component {

  render(){
    console.log(this.props.timestamp)
    return(
      <div>

        <HeaderContainer label= {moment(this.props.timestamp).format("Do MMMM YYYY")} />
          {this.props.scores.map((playerInfo, index)=>{
            return (
              <GameTableItem playerInfo = {playerInfo} rank={index+1}/>
            );
          })}
      </div>
    );
  }

}
