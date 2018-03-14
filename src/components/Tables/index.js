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
<<<<<<< HEAD
          return <tr>
            <td id="icon"><img class="civ-icon" src="civ.leaderImg"/></td>
            <td id="leader">{civ.leader}</td>
            <td id="civilization"> {civ.civilization} </td>
            <td id="ability"> {civ.iconImg}</td>
            <td id="checkbox">
              <label class="checkbox-container">
                  <input type="checkbox"/>
                  <span></span>
              </label>
            </td>
            </tr>
=======
          return(
            <CivilizationContainer civ = {civ}/>
          )
>>>>>>> 09412d05ccd9461d34fada8d1a18a8536591d9c8
        })}
      </table>
    );
  }
}
