import React, { Component } from 'react'
import style from './index.css'

export default class CivilizationContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      civ: this.props.civ,
      checked: {},
    }
  }

  onChange (){
    this.setState({checked: !this.state.checked})
    if(this.state.checked){
      this.props.selectedCivs.push(this.state.civ)
    } else {
      var index = this.props.selectedCivs.indexOf(this.props.civ)
      if(index > -1){
        this.props.selectedCivs.splice(index, 1)
      }
    }
  }

  render() {

    return (
      <tbody>
        <tr>
          <td className="icon"><img className="civ-icon" src={this.state.civ.leaderImg}/></td>
          <td className="leader">{this.state.civ.leader}</td>
          <td className="icon"><img className="civ-icon" src={this.state.civ.iconImg}/></td>
          <td className="civilization"> {this.state.civ.civilization} </td>
          <td id="checkbox">
            <label className="checkbox-container" onChange = {this.onChange.bind(this)}>
                <input type="checkbox"/>
                <span></span>
            </label>
          </td>
        </tr>
      </tbody>
    );
  }
}
