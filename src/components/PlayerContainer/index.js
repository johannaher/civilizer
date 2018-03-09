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
    if(this.userCheckbox.checked){
      this.props.selectedUsers.put(this.state.user)
    } else {
      var index = this.props.selectedUsers.indexOf(this.props.selectedUsers)
      if(index > -1){
        this.props.selectedUsers.splice(index, 1)
      }
    }
  }

  userCheckbox = (
    <label class="checkbox-container">
        <input type="checkbox" handleCheckboxChange = {this.selectUser}/>
        <span></span>
    </label>
  );

  render() {
    return (
      <div className = "player-container">

        <p><img className = "user-img" src={this.state.user.imgUrl}/>
        <p>{this.state.user.name}</p></p>

        {this.userCheckbox}

      </div>

    );
  }
}
