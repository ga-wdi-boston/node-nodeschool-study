// Create an Express.js server that processes PUT /message/:id requests
// and produces a SHA-1 hash of the current date combined with the ID from the URL.

var express = require('express')
var app = express()

// app handles PUT requests in any subdirectory of /path/:
app.put('/message/:id', function(req, res){
// the given variable is then stored in req.params
// So, to extract parameters from within the request handlers, use:
// req.params.id

  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])
