import React, { Component } from 'react';
import './TableComponent.css';

export default class ButtonComponent extends Component{
  render(){
    return(
      <div className="table-grid">

        <div className="grid-item">
          {this.props.label}
        </div>
      </div>
    )
  }
}
