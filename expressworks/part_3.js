var express = require('express')
var app = express()
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])
