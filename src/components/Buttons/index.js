import React, { Component } from 'react';
import './index.css';

export default class ButtonComponent extends Component{
  render(){
    return(
      <div className="buttonContainer">
        <a href={this.props.href}>
          <div className = "confirm-button">
            {this.props.label}
          </div>
        </a>
      </div>
    )
  }
}
