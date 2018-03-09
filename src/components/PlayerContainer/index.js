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
    if(userCheckbox.checked){
      props.selectedUsers.put(this.state.user)
    } else {
      props.selectedUsers.splice(this.state.user, 1)
    }
  }

  userCheckbox = (
    <label class="checkbox-container">
        <input type="checkbox" onClick = "selectUser()"/>
        <span></span>
    </label>
  );

  render() {
    return (
      <div className = "player-container">

        <p><img className = "user-img" src={this.props.user.imgUrl}/>
        <p>{this.props.user.name}</p></p>

        <userCheckbox/>

      </div>

    );
  }
}
