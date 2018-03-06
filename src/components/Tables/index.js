import React, { Component } from 'react';
import './index.css';
import civilizationList from '../Mockobject';

export default class ButtonComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      civilizationList: civilizationList
    }
  }
  render(){
    console.log(this.state)
    return(
      <div className="table-grid">
        {this.state.civilizationList.map((civ)=>{
          return <li className="list-civ">{civ.leader}</li>
        })}
      </div>
    )
  }
}
