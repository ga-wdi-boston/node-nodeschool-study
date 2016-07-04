
var express = require('express')
var app = express()
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
// var bodyparser = require('body-parser')
// app.use(bodyparser.urlencoded({extended: false}))

app.param('id', function (req, res, next, id) {
  req.id = id
  req.params.NAME
  next()
})

require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')


app.get('/message/:id', function (req, res, next) {
  console.log(req.id)
  next()
})
app.listen(process.argv[2])
