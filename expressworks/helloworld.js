var express = require('express');
var app = express();

app.get('/home', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.argv[2], function () {
  console.log('Example app listening on port 3000!');
});


// Create an Express.js app that outputs "Hello World!" when somebody goes to /home.
// This is how we can create an Express.js app on port 3000, that responds with
// a string on '/':
//
//     var express = require('express')
//     var app = express()
//     app.get('/', function(req, res) {
//       res.end('Hello World!')
//     })
//     app.listen(3000)
//
// In your solution, please use process.argv[2] instead of a fixed port number:
//
//     app.listen(process.argv[2])
//
