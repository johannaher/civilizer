import React, { Component } from 'react'
import './styles.css'

export default class Choice extends Component {

  render(){
    console.log(this.props)
    return(
      <div className="choice-container">
      <img className="choice-img" src={this.props.leaderImg}/>
      <p className="choice-name">{this.props.civilization}</p>
      </div>
    )
  }

}
