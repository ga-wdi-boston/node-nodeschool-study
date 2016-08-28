'use strict';

const http = require('http');
const concat = require('concat-stream');

let url = process.argv[2];

http.get(url, function (request) {
	request.setEncoding('utf8');

  let req = concat(function(data) {
    let count = data.split('').length;
    console.log(count);
    console.log(data);
  });
  // console.log(req);
  request.pipe(req);
});
