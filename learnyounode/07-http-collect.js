'use strict';

let http = require('http');

http.get(process.argv[2], function (request) {
  let final = '';
  request.setEncoding('utf8');
  request.on('data', function (data) {
    final = final + data;
  });
  request.on('end', function () {
    console.log(final.length);
    console.log(final);
  });
});
