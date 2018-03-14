import React, { Component } from 'react';
import './index.css';
import { civilizations } from '../../api';
import {users} from '../../api';

export default class RandomizeCiv extends Component{
  constructor(props){
    super(props)
    this.state = {
      civilizations: [],
      civsAndUsers: [],
    }
  }

  render(){
    return(

      for(i = civilizations.length -1; i>0; i--){
        x = Math.floor(Math-random() * (i + 1))
        temp = civilizations[i]
        civilizations[i] = civilizations[x]
        civilizations[x] = temp
      }

      for(i = users.length ; i>1; i--){
        for(j = 1 ; j <= 3; j++){
          test = civilizations.shift();
          civsAndUsers.put({users[i].id, test.id})
          console.log(civilizations); //alla civs?
          console.log(test);
        }
      }
    )
  }
}
