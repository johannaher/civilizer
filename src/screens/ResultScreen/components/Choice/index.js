import React, { Component } from 'react'
import './styles.css'
import ChoiceListItem from '../ChoiceListItem'
import Headers from '../../../../components/Headers'

export default class Choice extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: null,
      score: 0,
    }
  }

  onChoice(id){
    if(id!==this.state.id){
      this.setState({ selected: id })
      this.props.results[this.props.index].decided = id
    } else {
      this.setState({ selected: null })
    }
  }

  handleInput(event){
    this.setState({
      score: event.target.value.replace(/\D/,'')
    })
    this.props.results[this.props.index].score = event.target.value.replace(/\D/,'')
  }

  render(){
    return(
      <div className="user-choice-container">
        <Headers label={this.props.name}/>
        <div className="user-choice-choices">
          {this.props.choices.map((choice)=>{
            return <ChoiceListItem callback={this.onChoice.bind(this)} selected={this.state.selected} {...choice} />
          })}
        </div>
        <p className="score-label" >SCORE: <input type="text" className="score-input" value={this.state.score} onChange={this.handleInput.bind(this)}/></p>
      </div>
    )
  }

}
