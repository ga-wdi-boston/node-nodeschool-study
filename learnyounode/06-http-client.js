'use strict';

let http = require('http');

http.get(process.argv[2], function(request) {
  request.setEncoding('utf8');
  request.on('error', console.error(error));
  request.on('data', console.log(data));
});
