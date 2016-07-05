// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Write the String contents of each
// "data" event from the response to a new line on the console (stdout).

// You will need to use the http core module
var http = require('http');

// http.get() method is a shortcut for simple GET requests
// The first argument to http.get() can be the UR you want to GET
// Provide a callback as the second argument
http.get(process.argv[2], function (response) {
// Can treat Node Streams as objects that emit events
// The three events that are of most interest are: "data", "error" and "end".
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
}).on('error', console.error);


// The response object / Stream that you get from http.get() also has a setEncoding() method.
// If you call this method with "utf8", the "data" events will emit Strings
// rather than the standard Node Buffer objects  which you have to explicitly convert to Strings.
