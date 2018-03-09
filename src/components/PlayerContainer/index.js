import React, { Component } from 'react'
import style from './index.css'

export default class PlayerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: props.user
    }
  }

<<<<<<< HEAD
  selectUser(){
    if(userCheckbox.checked){
      props.selectedUsers.put(this.state.user)
    } else {
      props.selectedUsers.splice(this.state.user, 1)
    }
  }
=======
>>>>>>> 3a708a49fe46f8273ae281d7cac4aa9001af10db

  userCheckbox = (
    <label class="checkbox-container">
        <input type="checkbox" onClick = "selectUser()"/>
        <span></span>
    </label>
  );

  render() {
    return (
      <div className = "player-container">

<<<<<<< HEAD
        <p><img className = "user-img" src={this.props.user.imgUrl}/>
        <p>{this.props.user.name}</p></p>

        <userCheckbox/>
=======
        <label className="checkbox-container" id = "checkbox-user">
            <input type="checkbox"/>
            <span></span>
        </label>
>>>>>>> 3a708a49fe46f8273ae281d7cac4aa9001af10db

      </div>

    );
  }
}
