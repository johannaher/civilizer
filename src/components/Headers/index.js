import React, { Component } from 'react'
import Style from './index.css'

export default class Headers extends Component {
  render() {
    return (
      <p className="header-style">{this.props.label}</p>
    );
  }
}
