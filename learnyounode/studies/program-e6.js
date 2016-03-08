'use strict'

let http = require("http");
let file = process.argv[2];

http.get(file, function(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log(data);
    });
    response.on('error', function(err) {
      console.error(err);
    });
  });
