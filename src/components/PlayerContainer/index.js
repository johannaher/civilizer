import React, { Component } from 'react'
import style from './index.css'

export default class PlayerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: props.user
    }
  }

  selectUser(){
    if(checkbox.checked){
      
    }
  }

  render() {
    return (
      <div className = "player-container">

        <p><img className = "user-img" src={this.props.user.imgUrl}/>
        <p>{this.props.user.name}</p></p>

        <label class="checkbox-container" id = "checkbox-user">
            <input type="checkbox"/>
            <span></span>
        </label>

      </div>

    );
  }
}
