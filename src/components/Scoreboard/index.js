import React, { Component } from 'react'
import Style from "./index.css"

export default class Scoreboard extends Component {
  render() {
    return (
      <div className = "Grid-Scoreboard">
        {this.props.children}
      </div>
    );
  }
}
