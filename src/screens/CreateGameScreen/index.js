import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import TableComponent from '../../components/Tables/TableComponent.js'

class App extends Component {
  render() {
    return (
      <GridContainer>
          <img src={logo} className="TestImage" alt="logo"/>
          <img src={logo} className="TestImage" alt="logo"/>

          <TableComponent label="hej">
            <p> JOhanaHANSD </p><p> 23948</p>
          </TableComponent>
      </GridContainer>
    );
  }
}

export default App;
