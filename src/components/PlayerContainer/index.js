import React, { Component } from 'react'
import style from './index.css'

export default class PlayerContainer extends Component {

  render() {
    return (
      <div className = "player-container">

        <p><img className = "user-img" src={this.props.user.imgUrl}/>
        <p>{this.props.user.name}</p></p>

        <label class="checkbox-container">
            <input type="checkbox"/>
            <span></span>
        </label>

      </div>

    );
  }
}
