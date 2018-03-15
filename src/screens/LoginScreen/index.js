import React, { Component } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'
import style from './styles.css'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import {orange500, blue500} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { login } from '../../api'

class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      password: '',
      nameError: '',
      passwordError:'',
      dbError: '',
    }
  }

  attemptLogin(){
    let valid = true
    if(this.state.name===''){
      this.setState({nameError: "You forgot username"})
      valid = false
    } else {
      this.setState({nameError: ''})
    }
    if(this.state.password===''){
      this.setState({passwordError: "You forgot password"})
      valid = false
    } else{
      this.setState({passwordError: ''})
    }
    if(valid){
      login(this.state.name, this.state.password, this.handleLoginResponse.bind(this))
    }
  }

  handleLoginResponse(res){
    if(res.success){
      sessionStorage.setItem('token', res.token)
      sessionStorage.setItem('isLoggedIn', true)
      sessionStorage.setItem('name', res.name)
      sessionStorage.setItem('id', res.id)
      sessionStorage.setItem('imgUrl', res.imgUrl)
      this.props.history.push('/');
    } else {
      this.setState({dbError: res.message})
    }
  }

  render() {
      return (
        <div className="login-screen">
          <MuiThemeProvider>
          <div className="login-container">
            <h1 className="login-heading">Welcome to Civilizer!</h1>
            <div className="login-input-container">
                <TextField
                  onChange={(event, newValue)=>{this.setState({name: newValue})}}
                  floatingLabelText="Username"
                  errorText={this.state.nameError}
                  />
                <TextField
                  type='password'
                  onChange={(event, newValue)=>{this.setState({password: newValue})}}
                  floatingLabelText="Password"
                  errorText={this.state.passwordError}
                 />
                 <p className="dbError">{this.state.dbError}</p>
            </div>
            <FlatButton
              onClick={()=>this.attemptLogin()}
              className="login-button"
              label="LOGIN"
              primary={true}
              />
          </div>
        </MuiThemeProvider>
        </div>
      );
  }
}

export default withRouter(LoginScreen)

const styles = {
  errorStyle: {
    color: blue500,
  },
  underlineStyle: {
    borderColor: blue500,
  },
  floatingLabelStyle: {
    color: blue500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
}
