import React, { Component } from 'react';
import './index.css';

export default class ButtonComponent extends Component{
  render(){
    return(
      <div class="header-banner">
        {this.props.label}
      </div>
    )
  }
}
