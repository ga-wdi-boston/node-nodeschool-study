// Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.
var http = require('http');
var map = require('through2-map')

function handler (request, response) {
  request.pipe(map(function (chunk) {
   return chunk.toString().toUpperCase()
  })).pipe(response);
};

var server = http.createServer(handler);
server.listen(process.argv[2]);
