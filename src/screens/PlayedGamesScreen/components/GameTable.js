import React, { Component } from 'react'
import style from './index.css'

export default class GameTable extends Component {

  render(){
    console.log(this.props.timestamp)

    return(
      <div>
        <p>{this.props.timestamp}</p>
        <div>
          {this.props.scores.map((playerInfo, index)=>{
            return (
              <div className = "game-score-item">
                <p>#{index + 1}</p>
                <p>"Name: "{playerInfo.userid}/></p>
                <p>"Civ: "{playerInfo.civid}</p>
                <p>"Score "{playerInfo.score}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}
