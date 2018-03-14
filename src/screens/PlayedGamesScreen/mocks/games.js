const uuidv4 = require('uuid/v4');

module.exports = [
  {
    id: uuidv4(),
    timestamp: "01-01-1991",
    scores: [{userid: uuidv4(), civid: uuidv4(), score: 162}, {userid: uuidv4(), civid: uuidv4(), score: 149}],
  },
  {
    id: uuidv4(),
    timestamp: "02-11-1988",
    scores: [{userid: uuidv4(), civid: uuidv4(), score: 120}],
  }
]
