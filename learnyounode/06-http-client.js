// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Write the String contents of each
// "data" event from the response to a new line on the console (stdout).

// load the http module
// set the URL equal to the 3rd argument
var http = require('http');
var url = process.argv[2];

// http.get to make get request to provided URL
// provide callback function with response
http.get(url, function(res) {
  // set encoding of response to utf8 so it comes back as text
  res.setEncoding('utf8');
  // for each chunk of data, console.log that chunk
  res.on('data', function(chunk) {
    console.log(chunk);
  });
});
