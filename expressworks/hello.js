// Create an app using Express that outputs `"Hello World!"` when somebody goes to `/home`.  use port number `process.argv[2]`.  Run `$ killall node` before verifying exercises to end any previous processes.
'use strict';

var express = require('express');
var app = express();
app.get('/home', function(req, res) {
  res.end('Hello World!')
});
app.listen(process.argv[2]);
