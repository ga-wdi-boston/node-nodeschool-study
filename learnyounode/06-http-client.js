var http = require('http');

var url = process.argv[2];

// need .on('error', callback) for both the http.get and the response

http.get(url, function(response) {
  // response.setEncoding('utf8').on('data', function(data) {
  //   console.log(data);
  // same as above:
  response.setEncoding('utf8').on('data', console.log);

  response.on('error', console.error);
}).on('error', console.error);