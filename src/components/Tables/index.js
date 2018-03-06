import React, { Component } from 'react';
import './index.css';

export default class ButtonComponent extends Component{
  render(){
    return(
      <div className="table-grid">

        <div className="grid-item">
          {this.props.children}
        </div>
      </div>
    )
  }
}
