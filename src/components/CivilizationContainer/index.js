import React, { Component } from 'react'
import style from './index.css'

export default class CivilizationContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      civ: this.props.civ,
    }
  }

  render() {
    console.log("Hello",this.state)
    return (
      <tbody>
        <tr>
          <td id="icon"><img className="civ-icon" src={this.state.civ.iconImg}/></td>
          <td id="leader">{this.state.civ.leader}</td>
          <td id="civilization"> {this.state.civ.civilization} </td>
          <td id="ability">(founding father ex)</td>
          <td id="checkbox">
            <label className="checkbox-container">
                <input type="checkbox"/>
                <span></span>
            </label>
          </td>
        </tr>
      </tbody>
    );
  }
}
