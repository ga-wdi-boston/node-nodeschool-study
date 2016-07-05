// Write a route ('/form') that processes HTML form input
// (<form><input name="str"/></form>) and prints the value of str backwards.

var express = require('express')
var bodyParser = require('body-parser')
var app = express()


// To parse x-www-form-urlencoded request bodies, Express.js can use urlencoded()
// middleware from the body-parser module.
app.use(bodyParser.urlencoded({extended: false}))


// To handle a POST request, use the post() method which is used the same way as get():
//     app.post('/path', function(req, res){...})
app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
