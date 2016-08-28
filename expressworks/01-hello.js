var express = require('express');

// console.log(process.argv);
var port = process.argv[2];

var app = express();
app.get('/home', function(req, res) {
  res.end('Hello World!');
});

//for any route
// var app = express();
// app.get('*', function(req, res) {
//   res.end('Hello World!');
// });

app.listen(port);
