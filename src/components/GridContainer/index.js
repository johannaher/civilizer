import React, { Component } from 'react'
import Style from './index.css'

export default class GridContainer extends Component {
  render() {
    return (
      <div className = "grid-container">
        <div className = "header-container">
          <h1>HEADER</h1>
        </div>

        <div className = "center-container">
          {this.props.children}
        </div>

        <div className = "footer-container">
          <h1>FOOTER</h1>
        </div>
      </div>
    );
  }
}
