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

          <Link to={{pathname: "/CreateGameScreen",}}>
            <div className = "menu-button">New</div>
          </Link>

          <Link to={{pathname: "/Games",}}>
          <div className = "menu-button">Games</div>
          </Link>

          <Link to={{pathname: "/",}}>
          <div className = "menu-button">Highscore</div>
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
