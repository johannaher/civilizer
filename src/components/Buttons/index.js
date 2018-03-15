import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default class ButtonComponent extends Component{
  render(){
    return(
      <div className="buttonContainer">
        <Link to={this.props.href}>
          <div className = "confirm-button">
            {this.props.label}
          </div>
        </Link>
      </div>
    )
  }
}
