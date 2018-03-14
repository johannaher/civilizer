import React, { Component } from 'react'
import './styles.css'
import ChoiceListItem from '../ChoiceListItem'

export default class Choice extends Component {

  render(){
    console.log(this.props)
    return(
      <div className="user-choice-container">
      <h2 className="user-choice-name">{this.props.name}</h2>
      <div className="user-choice-choices">
      {this.props.choices.map((choice)=>{
        return <ChoiceListItem {...choice} />
      })}
      </div>
      </div>
    )
  }

}
