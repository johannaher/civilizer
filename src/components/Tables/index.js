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
            <td id="icon"><img class="civ-icon" src="https://d1u5p3l4wpay3k.cloudfront.net/civ6_gamepedia_en/f/f1/Icon_district_hansa.png?version=76007f5cbcad2c226eae842c5ad1300e"/></td>
            <td id="leader">{civ.leader}</td>
            <td id="civilization"> {civ.civilization} </td>
            <td id="ability">(founding father ex)</td>
            <td id="checkbox">
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
