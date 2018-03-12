import React, { Component } from 'react';
import './index.css';
import CivilizationContainer from '../CivilizationContainer';

export default class TableComponents extends Component{

  constructor(props){
    super(props);
    this.state = {
      civilizationsList: props.civilizationsList,
    }
  }

  render(){
    console.log(this.state)
    return(

      <table className="civ-table">
        {this.props.civilizationList.map((civ)=>{
          return(
            <CivilizationContainer civ = {civ}/>
          )
        })}
      </table>
    );
  }
}
