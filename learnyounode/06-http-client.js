'use strict';

const http = require('http');

let url = process.argv[2];

http.get(url, function (request) {
	request.setEncoding('utf8');
	request.on('data', console.log);
	request.on('error', console.error);
})


//
//
// http.get("http://www.google.com/index.html", function(res) {
//   console.log("Got response: " + res.statusCode);
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
// });
