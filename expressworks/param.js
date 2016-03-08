var express = require('express');
var app = express();

app.put('/message/:id', function(req, res){ //update resource, partial update
  // message id is a parameter
  var id = req.params.id; // express parses the value from url
  // could have more than 1 params, ie /message/:id/:name/:data
  var str = require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
  res.send(str)

});

app.listen(process.argv[2])
