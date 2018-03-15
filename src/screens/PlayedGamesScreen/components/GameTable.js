import React, { Component } from 'react'
import style from './index.css'
import GameTableItem from './GameTableItem.js'

export default class GameTable extends Component {

  render(){
    console.log(this.props.timestamp)

    return(
      <div>
        <p>{this.props.timestamp}</p>
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
