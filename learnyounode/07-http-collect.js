'use strict';

var http = require('http');
var url = process.argv[2];


http.get(url, function(response){
  var accumulator = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
    accumulator += data;
  });
  response.on('error', function(err){
    console.error(err);
  });
  response.on('end', function(){
    console.log(accumulator.length);
    console.log(accumulator);
  });
});
