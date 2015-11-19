var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);


//PIPE METHOD
// This method pulls all the data out of a adable stream, and writes it to the supplied destination,
//automatically managing the flow so that the destination is not overwhelmed by a fast readable stream.
