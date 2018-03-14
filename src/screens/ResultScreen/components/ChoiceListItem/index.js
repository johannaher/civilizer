import React, { Component } from 'react'
import './styles.css'

export default class Choice extends Component {

  constructor(props){
    super(props)
    this.state = {
      checked: false,
    }
  }

  onChange(){
    this.props.callback(this.props.id)
  }

  render(){
    return(
      <div className="choice-container">
      <img className="choice-img" src={this.props.leaderImg}/>
      <div className="choice-right-element">
      <p className="choice-name">{this.props.civilization}</p>
      <label className="checkbox-container choice-checkbox" onChange = {()=>this.onChange()}>
          <input checked={this.props.selected===this.props.id} type="checkbox" />
      </label>
      </div>
      </div>
    )
  }

}
