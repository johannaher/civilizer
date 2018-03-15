import React, { Component } from 'react';
import './index.css';
import CivilizationContainer from '../CivilizationContainer';

export default class TableComponents extends Component{

  constructor(props){
    super(props);
    this.state = {
      civilizationList: props.civilizationList,
      checkAll: false,
      default: true,
    }
  }

  componentWillReceiveProps(props){
    this.setState({civilizationList: props.civilizationList});
  }

  onCheckAll(){
    this.setState({checkAll: !this.state.checkAll})
    if(!this.state.checkAll){
      this.setState({
        default: true
      })
    }
  }

  render(){
    return(
      <div>
        <p className="checkAllText">Check all
          <label className="checkbox-container">
            <input type="checkbox" checked={this.state.checkAll} onChange={()=>this.onCheckAll()} />
          </label>
        </p>
        <div className="civ-table">
          {this.props.civilizationList.map((civ)=>{
            return(
              <CivilizationContainer defaultCheck={this.state.default} civ = {civ} selectedCivs = {this.props.selectedCivs}/>
            )
          })}
        </div>
      </div>
    );
  }
}
