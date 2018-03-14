import axios from 'axios'
import qs from 'qs'

const url = "http://localhost:1337"
const token = sessionStorage.getItem('token')
const config = {
  params: {
    token: token
  }
}



export const users = (callback) =>{
  axios.get(url + '/users', config).then((res) => {
    callback(res.data)
  })
}

export const userById = (id, callback) =>{
  axios.get(url + '/users/id', { params: {id:id, token: token }}).then((res) => {
    callback(res.data)
  })
}

export const civById = (id, callback) =>{
  axios.get(url + '/civilizations/id', { params: {id:id, token: token }}).then((res) => {
    callback(res.data)
  })
}

export const games = (callback) =>{
  axios.get(url + '/scores/games', config).then((res) => {
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
  axios.get(url + '/civilizations', config).then((res) => {
    console.log("REs ", res)
    callback(res.data)
  })
}

export const scoreAdd = (gameid, userid, civid, score, timestamp, callback) => {
  axios.post(url + '/scores',qs.stringify({gameid, userid, civid, score, timestamp}), config).then((res) => {
    callback(res.data)
  })
}
