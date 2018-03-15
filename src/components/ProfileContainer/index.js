import React, { Component } from 'react'
import style from './index.css'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class PlayerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      userid: sessionStorage.getItem('id'),
      imgUrl: sessionStorage.getItem('imgUrl'),
      userName: sessionStorage.getItem('name'),
    }
  }

  logout(){
    sessionStorage.setItem('isLoggedIn',false)
  }

  render() {

    return (

      <div className="profile-container">
        <p>{this.state.userName}</p>
        <Link to='/LoginScreen' onClick={()=>this.logout()}>Sign out</Link>
      </div>

    );

  }
}
