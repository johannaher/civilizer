import React, { Component } from 'react';
import './index.css';

export default class ButtonComponent extends Component{
  render(){
    return(
      <div className="buttonContainer">
        <div className = "confirm-button">
          {this.props.label}
        </div>
      </div>
    )
  }
}
