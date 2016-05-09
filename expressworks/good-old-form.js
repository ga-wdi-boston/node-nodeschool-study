var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/form', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send(req.body.str.split('').reverse().join(''))
})




app.listen(process.argv[2])
