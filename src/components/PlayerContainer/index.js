import React, { Component } from 'react'
import style from './index.css'

export default class PlayerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: props.user
    }
  }


  render() {
    return (
      <div className = "player-container">

        <label className="checkbox-container" id = "checkbox-user">
            <input type="checkbox"/>
            <span></span>
        </label>

      </div>

    );
  }
}
