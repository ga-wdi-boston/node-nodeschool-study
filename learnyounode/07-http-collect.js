'use strict'

const concatStream = require('concat-stream');

const http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.pipe(concatStream(function (data) {
    console.log(data.length);
    console.log(data);
  }));
});
