'use strict';

var http = require('http');
var url = process.argv[2];

http.get(url, function callback(response) {
  response.setEncoding('utf-8');
  var dataAcculumator = '';

  response.on('data', function dataListener(data) {
    data = data.toString();
    dataAcculumator += data;
  });

  response.on('error', console.error);

  response.on('end', function endListener(data) {
    console.log(dataAcculumator.length);
    console.log(dataAcculumator);
  });
});

