import React, { Component } from 'react'
import Style from './index.css'
import ProfileContainer from '../ProfileContainer'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

export default class GridContainer extends Component {


  render() {
    return (
      <div className = "grid-container">

        <Helmet>
          <title> 'Civilizer'</title>
          <meta name = 'description' content = 'Civilizer lets you setup player configurations for Sid Meiers Civilization 6.'/>
          <link rel = 'canonical' href = 'localhost:3000'/>
          <meta charset = 'utf-8'/>
          <meta name = 'keywords' content = 'Civ, civilization, multiplayer, score, sid meier'/>
        </Helmet>

        <div className = "header-container">
          <a href = "/">
            <p className="top-header">CIVILIZER</p>
          </a>
        </div>

        <div className = "menu-row-container">


        <Link to={{pathname: "/",}} style={{ textDecoration: 'none' }}>
          <div style={{
            color:(this.props.location==='home') ? 'white' : 'black',
          }} className = "menu-button"><p>Highscores</p></div>
        </Link>

        <Link to={{pathname: "/CreateGameScreen",}} style={{
          textDecoration: 'none',
        }}>
          <div style={{
            color:(this.props.location==='Create') ? 'white' : 'black',
          }} className = "menu-button"><p>New Game</p></div>
        </Link>

        <Link to={{pathname: "/Games",}} style={{ textDecoration: 'none' }}>
          <div style={{
            color:(this.props.location==='PreviousGames') ? 'white' : 'black',
          }} className = "menu-button"><p>Previous Games</p></div>
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
