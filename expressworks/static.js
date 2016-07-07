var path = require('path');
var express = require('express');
var app = express();
var port = process.argv[2];
var resource = process.argv[3];

app.use(express.static(resource || path
  .join('/Users/mishaherscu/wdi/study/node-nodeschool-study/expressworks', 'public')))

app.listen(port);
