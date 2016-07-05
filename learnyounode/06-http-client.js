'use strict';

let http = require('http');

let url = process.argv[2];

http.get(url, function (req) {
  req.setEncoding('utf8');
  req.on('data', console.log);
  req.on('error', console.error)
});
