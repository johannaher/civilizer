import axios from 'axios'
import qs from 'qs'

const url = "http://localhost:1337"

const config = {
  params: {
    token: sessionStorage.getItem('token')
  }
}


export const users = (callback) =>{
  axios.get(url + '/users', config).then((res) => {
    callback(res.data)
  })
}

export const highScores = (callback) =>{
  axios.get(url + '/scores/high', config).then((res) => {
    callback(res.data)
  })
}

export const login = ( name, password, callback ) => {
  axios.post( url + '/auth/login', qs.stringify({ name: name, password: password }), config ).then((res) => {
    callback(res.data)
  })
}

export const civilizations = (callback) =>{
  axios.get(url + '/civilizations').then((res) => {
    console.log("REs ", res)
    callback(res.data)
  })
}
