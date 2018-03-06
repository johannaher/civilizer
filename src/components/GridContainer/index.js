import React, { Component } from 'react'
import Style from './index.css'

export default class GridContainer extends Component {
  render() {
    return (
      <div className = "grid-container">

        <div className = "header-container">
          <a href = "/">
            <h1>CIVILIZER</h1>
          </a>
        </div>

        <div className = "center-container">
          {this.props.children}
        </div>

        <div className = "footer-container">
          <p>THE UNOFFICIAL CIV6 GAME SETUP TOOL</p>
        </div>
      </div>
    );
  }
}
