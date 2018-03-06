import React, { Component } from 'react';
import './index.css';
import civilizationList from '../Mockobject';

export default class TableComponents extends Component{
  constructor(props){
    super(props)
    this.state = {
      civilizationList: civilizationList
    }
  }
  render(){
    console.log(this.state)
    return(
      <table className="civ-table">
        {this.state.civilizationList.map((civ)=>{
          return <tr>
            <td id="civilization"> {civ.civilization} </td>
            <td id="leader">{civ.leader}</td>
            <td>
              <label class="checkbox-container">
                  <input type="checkbox"/>
                  <span></span>
              </label>
            </td>
            </tr>
        })}
      </table>
    )
  }
}


/*<div className="table-grid">
  {this.state.civilizationList.map((civ)=>{
    return <li className="list-civ">{civ.id} {civ.civilization} {civ.leader}</li>
  })}
</div>*/
