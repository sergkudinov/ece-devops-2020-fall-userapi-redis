const express = require('express')
const user = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    user.create(req.body, (err, res) => {
      if(err) return resp.status(500).send(err)
      resp.status(201).send(res)
    })
  })
  // .get('/:username', (req, resp, next) => { // Express URL params - https://expressjs.com/en/guide/routing.html
  //   // TODO Create get method API
  //   const username = req.params.username
  // })
  
module.exports = userRouter
