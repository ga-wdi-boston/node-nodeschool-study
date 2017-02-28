var express = require('express');
var port = process.argv[2];
var asset = process.argv[3];

var app = express();

app.use(express.static(asset));
app.listen(port);
