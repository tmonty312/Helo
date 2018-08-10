const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const path = require('path')

const app = express()
const port = process.env.SERVER_PORT || 4008

const Controller = require('./controller')

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected!')
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))


app.use(bodyParser.json())

app.get('/auth/callback', Controller.auth)

app.get('/api/currentUser', (req, res) => {
    res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
})


app.get('/api/posts', Controller.read)
app.post('/api/posts', Controller.create)

app.use(express.static(`${__dirname}/../build`))
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })



app.listen(port, () => {
    console.log('listening on port.', port)
})