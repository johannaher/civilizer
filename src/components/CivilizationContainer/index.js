import React, { Component } from 'react'
import style from './index.css'

export default class CivilizationContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      civ: this.props.civ,
      checked: props.defaultCheck,
    }
  }

  onChange(){
    if(this.state.checked){
      this.props.selectedCivs.push(this.state.civ)
      this.setState({checked: true})
    } else {
      var index = this.props.selectedCivs.indexOf(this.props.civ)
      if(index > -1){
        this.props.selectedCivs.splice(index, 1)
      }
      this.setState({checked: false})
    }
  }

  render() {

    return (
      <tbody>
        <tr>
          <td className="icon"><img className="civ-icon" src={this.state.civ.leaderImg}/></td>
          <td className="leader"><p>{this.state.civ.leader}</p></td>
          <td className="icon"><img className="civ-icon" src={this.state.civ.iconImg}/></td>
          <td className="civilization"><p>{this.state.civ.civilization}</p></td>
          <td id="checkbox">
            <label className="checkbox-container" onChange = {this.onChange.bind(this)}>
              <input type="checkbox"/>
            </label>
          </td>
        </tr>
      </tbody>
    );
  }
}
