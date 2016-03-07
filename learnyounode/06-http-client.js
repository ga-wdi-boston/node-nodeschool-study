'use strict';

let http = require('http');

http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}).on('error', function(e) {
  console.log('Got error: ' + e.message);
});
