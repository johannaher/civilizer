import React, { Component } from 'react'
import style from './index.css'

export default class PlayerContainer extends Component {
  render() {
    return (
      <div className = "player-container">

        <img className = "user-img"/>
        <p>{this.props.children}</p>

      </div>

    );
  }
}
