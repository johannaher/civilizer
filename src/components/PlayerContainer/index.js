import React, { Component } from 'react'
import style from './index.css'
import Polygon from 'react-polygon'
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'


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
    if(this.state.checked){
      this.props.selectedUsers.push(this.state.user)
    } else {
      var index = this.props.selectedUsers.indexOf(this.props.user)
      if(index > -1){
        this.props.selectedUsers.splice(index, 1)
      }
    }
  }

  render() {
    console.log("SELECTEDUSERS", this.props.selectedUsers);

    return (

      <div className="player-container">

        <img className="user-img" src={this.state.user.imgUrl}/>
        <div className="display-name">
          <p>{this.state.user.name}</p>

          <label className="checkbox-container" onChange = {this.onChange.bind(this)}>
              <input type="checkbox" />
              <span/>
          </label>
        </div>

      </div>

    );

  }
}
