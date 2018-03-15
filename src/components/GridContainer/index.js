import React, { Component } from 'react'
import Style from './index.css'
import ProfileContainer from '../ProfileContainer'
import ButtonComponent from '../../components/Buttons'
import {Link} from 'react-router-dom'

export default class GridContainer extends Component {

  render() {
    return (
      <div className = "grid-container">

        <div className = "header-container">
          <a href = "/">
            <p className="top-header">CIVILIZER</p>
          </a>
        </div>

        <div className = "menu-row-container">

        <Link to={{pathname: "/",}} style={{ textDecoration: 'none' }}>
          <div className = "menu-button"><p>Highscores</p></div>
        </Link>

          <Link to={{pathname: "/CreateGameScreen",}} style={{ textDecoration: 'none' }}>
            <div className = "menu-button"><p>New Game</p></div>
          </Link>

          <Link to={{pathname: "/Games",}} style={{ textDecoration: 'none' }}>
            <div className = "menu-button"><p>Previous Games</p></div>
          </Link>

          <ProfileContainer/>

        </div>



        <div className = "center-container">


          {this.props.children}
        </div>

        <div className = "footer-container">
          <p>THE UNOFFICIAL CIV6 GAME SETUP TOOL</p>
        </div>
      </div>
    );
  }
}
