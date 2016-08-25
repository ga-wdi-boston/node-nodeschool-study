// Write a program that performs an HTTP GET request to a URL provided to you
//  as the first command-line argument. Collect all data from the server (not
//  just the first "data" event) and then write two lines to the console
//  (stdout).
//
//  The first line you write should just be an integer representing the number
//  of characters received from the server. The second line should contain the
//  complete String of characters sent by the server.

var http = require('http');
concat = require('concat-stream');

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on('error', function(err) {
    return console.error(err);
  });
  var concatBuffer = concat(function(buffer) {
    console.log(buffer.length);
    console.log(buffer);
  });
  response.pipe(concatBuffer);
});
