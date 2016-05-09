var express = require('express')
var bodyParser = require('body-parser')

var app = express()


app.put('/message/:id', function(request, response) {
  var id = request.params.id
  var crypto = require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')

  response.send(crypto);
});


app.listen(process.argv[2])
