import React, { Component } from 'react'
import style from './index.css'

export default class PlayerContainer extends Component {
  render() {
    return (
      <div className = "player-container">

        <img className = "user-img"/>

        <div className = "user-id">
          {this.props.children}
        </div>

      </div>

    );
  }
}
