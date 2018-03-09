import React, { Component } from 'react'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import Tables from '../../components/Tables'
import ButtonComponent from '../../components/Buttons'
import GamePlayersContainer from '../../components/GamePlayersContainer'
import Header from '../../components/Headers'
import { civilizations } from '../../api'

export default class CreateGameScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      civilizationList: [],
    }
  }

  componentWillMount(props){
    civilizations(this.setCivilizationList.bind(this))
  }

  setCivilizationList(data){
    if(data.success){
      this.setState({civilizationList: data.civilizations})
    } else {
      console.log("Didn't get any civs ", data.message)
    }
  }

  render() {
    console.log(this.state)
    return (
      <GridContainer>
        <div className = "grid-Scoreboard">
          {this.state.civilizationList.map((civilization)=>{
            return (
              <div className = "scoreboard-item">

                <p>{civilization.leader}</p>
                <p>{civilization.civilization}</p>
              </div>

            )
          })}
        </div>
      </GridContainer>
    );
  }
}
