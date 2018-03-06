import React, { Component } from 'react'
import style from './index.css'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import TableComponent from '../../components/Tables'

export default class HomeScreen extends Component {
  render() {
    return (
      <GridContainer>
        <div className = "grid-container">
          <div className = "header-container">
            <h1>HEADER</h1>
          </div>

          <div className = "center-container">
            {this.props.children}
          </div>

          <div className = "footer-container">
            <h1>FOOTER</h1>
          </div>
        </div>
      </GridContainer>
    );
  }
}
