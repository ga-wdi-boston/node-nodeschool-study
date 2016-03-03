// Write an HTTP server that serves the same text file for each request it receives.

var http = require('http');
var fs = require('fs');

function handler (request, response) {
  request.setEncoding('utf8');
  var file = process.argv[3]
  var src = fs.createReadStream(file);
  src.pipe(response);
  request.on('end', function () {
    response.end();
  });
};

var server = http.createServer(handler);
server.listen(process.argv[2]);


// fs.createReadStream() //  to stream the file contents to the response.
// src.pipe(dst) // to pipe the data from the src stream to the dst stream.
// src is source from createReadStream
// dst is destination from response

// file:///Users/faetea/.nvm/versions/node/v4.1.1/lib/node_modules/learnyounode/node_apidoc/http.html
