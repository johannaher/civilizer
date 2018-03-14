import React, { Component } from 'react';
import './index.css';
import CivilizationContainer from '../CivilizationContainer';

export default class TableComponents extends Component{

  constructor(props){
    super(props);
    this.state = {
      civilizationList: props.civilizationList,
    }
  }

  componentWillReceiveProps(props){
    this.setState({civilizationList: props.civilizationList});
  }

  render(){
    return(
      <table className="civ-table">
        {this.props.civilizationList.map((civ)=>{
          return(
            <CivilizationContainer civ = {civ} selectedCivs = {this.props.selectedCivs}/>
          )
        })}
      </table>
    );
  }
}
