import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import TableComponent from '../../components/Tables/TableComponent.js'

class App extends Component {
  render() {
    return (
      <GridContainer>
<<<<<<< HEAD
          <img src={logo} className="TestImage" alt="logo"/>
          <img src={logo} className="TestImage" alt="logo"/>

          <TableComponent label="hej">
            <p> JOhanaHANSD </p><p> 23948</p>
          </TableComponent>
=======
        <p>player 1:1</p>
        <p>player 1:2</p>
        <p>player 2:1</p>
        <p>player 2:2</p>
>>>>>>> 2f8accc1ee75ef3fe8d0013405fd8f029d58a203
      </GridContainer>
    );
  }
}

export default App;
