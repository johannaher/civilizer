import React, { Component } from 'react'
import Style from './index.css'

export default class GridContainer extends Component {
  render() {
    return (
      <div className = "grid-container">
        {this.props.children}
      </div>
    );
  }
}
