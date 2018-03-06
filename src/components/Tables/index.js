import React, { Component } from 'react';
import './index.css';
import civilizationList from '../Mockobject/Mockobject.js';

export default class ButtonComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      civilizationList: civilizationList
    }
  }
  render(){
    return(
      this.state.civilizationList.map((civ)=>{
        <p>{civ.name}</p>
      })
    )
  }
}
