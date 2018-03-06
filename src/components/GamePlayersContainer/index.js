import React, { Component } from 'react'
import style from './index.css'
import PlayerContainer from '../PlayerContainer'

export default class GamePlayersContainer extends Component {
  render() {
    return (
      <div className = "player-grid">
        <PlayerContainer>JOHANNA</PlayerContainer>
        <PlayerContainer>SOFIA</PlayerContainer>
        <PlayerContainer>JESPER</PlayerContainer>
        {this.props.children}
      </div>
    );
  }
}
