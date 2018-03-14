import React, { Component } from 'react'
import style from './index.css'

export default class PlayerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: props.user,
      checked: {},
    }
  }

  onChange (){
    this.setState({checked: !this.state.checked})

    if(this.userCheckbox.checked){
      this.props.selectedUsers.put(this.state.user)
    } else {
      var index = this.props.selectedUsers.indexOf(this.props.selectedUsers)
      if(index > -1){
        this.props.selectedUsers.splice(index, 1)
      }
    }
  }

  render() {
    console.log(this.props.selectedUsers);

    return (
      <div className = "player-container">

        <img className = "user-img" src={this.state.user.imgUrl}/>
        <p>{this.state.user.name}</p>

        <label className="checkbox-container" onChange = {this.state.onChange}>
            <input type="checkbox" />
            <span/>
        </label>

      </div>

    );

  }
}
