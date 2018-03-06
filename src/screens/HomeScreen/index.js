import React, { Component } from 'react'
import style from './index.css'
import GridContainer from '../../components/GridContainer'
import PlayerContainer from '../../components/PlayerContainer'

export default class HomeScreen extends Component {
  render() {
    return (
      <GridContainer>
        <PlayerContainer>JOHANNA</PlayerContainer>
      </GridContainer>
    );
  }
}
