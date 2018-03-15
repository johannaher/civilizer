import React, { Component } from 'react'
import style from './index.css'
import GameTableItem from './GameTableItem.js'
import HeaderContainer from '../../../components/HeaderContainer'

export default class GameTable extends Component {

  render(){
    console.log(this.props.timestamp)

    return(
      <div>
        <HeaderContainer label= {this.props.timestamp} />
        <div>
          {this.props.scores.map((playerInfo, index)=>{
            return (
              <div>
                <p>#{index + 1}</p>
                <GameTableItem playerInfo = {playerInfo}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}
