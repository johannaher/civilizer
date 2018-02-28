import React, { Component } from 'react'
import logo from '../../assets/icons/logo.svg'
import GridContainer from '../../components/GridContainer'
import style from './index.css'
import TableComponent from '../../components/Tables'

class App extends Component {
  render() {
    return (
      <GridContainer>
          <img src={logo} className="TestImage" alt="logo"/>
          <img src={logo} className="TestImage" alt="logo"/>

<<<<<<< HEAD
          <TableComponent>
=======
          <TableComponent label="hej på dig johanna">
>>>>>>> c13558f3c66be032a9c3a4ddd4a45168fa02b03e
            <p> JOhanaHANSD </p><p> 23948</p>
          </TableComponent>
      </GridContainer>
    );
  }
}

export default App;
