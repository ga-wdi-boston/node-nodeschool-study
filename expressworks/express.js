var express = require('express');
var app = express();

app.get('/home', function (req, res) {
  res.send('Hello World!');
});

app.listen(Number(process.argv[2]));
