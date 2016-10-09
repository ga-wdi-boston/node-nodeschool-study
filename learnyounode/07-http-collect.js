var http = require('http');
var concatStream = require('concat-stream');

var url = process.argv[2];

// need .on('error', callback) for both the http.get and the response

http.get(url, function(response) {
  // response.setEncoding('utf8').on('data', function(data) {
  //   console.log(data);
  // same as above:
  response.pipe(concatStream(function (data) { 
    var stringifiedData = data.toString();
    console.log(stringifiedData.length);
    console.log(data.toString());
   }));

  response.on('error', console.error);
}).on('error', console.error);