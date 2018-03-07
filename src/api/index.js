import axios from 'axios'

const url = "http://localhost:1337"

export const users = (callback) =>{
  axios.get(url + '/users').then((res) => {
    console.log("REs ", res)
    callback(res.data)
  })
}

export const highScores = (callback) =>{
  axios.get(url + '/scores/high').then((res) => {
    console.log("REs ", res)
    callback(res.data)
  })
}
