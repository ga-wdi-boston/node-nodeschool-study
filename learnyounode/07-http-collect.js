'use strict';

let bl = require('bl');
let concatStream = require('concat-stream');
let http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function(err, data) {
    console.log(data.length);
  }));
  //was only logging data, needed to log data.length
  response.pipe(concatStream(function(data) {
    console.log(data);
  }));
});
