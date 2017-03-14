// need to require express to use express
const express = require('express');
// need to invoke express and define it as a variable
const app = express();

// the function takes in request and resolve
// from app, need to define '/home' and then function that logs "Hello World"
app.get('/home', function(req, res) {
  res.end('Hello World!');
});

// then have express take in the process.argv[2] because the filename is the 2 element in the array
app.listen(process.argv[2] || 3000);
