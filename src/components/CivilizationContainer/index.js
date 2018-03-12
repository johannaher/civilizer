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
    console.log(this.state)
    return (
      <tbody>
        <tr>
          <td id="icon"><img className="civ-icon" src="https://d1u5p3l4wpay3k.cloudfront.net/civ6_gamepedia_en/f/f1/Icon_district_hansa.png?version=76007f5cbcad2c226eae842c5ad1300e"/></td>
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
