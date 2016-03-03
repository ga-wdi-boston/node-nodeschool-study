// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

var http = require('http');
var url = process.argv[2];// url provided as first command-line arg

// .get method shortcut for GET req
http.get(url, function callback (response) {
  response.setEncoding('utf8');
  response.on("data", function dataListener (data) {
    console.log(data);
  });
  response.on("error", function errorListener (err) {
    console.log("Sever Error!", err);
  });
  response.on("end", function endListener (end) {
  });
}); // end http.get
// Write the String contents of each "data" event from the response to a new line on the console.


// var http = require('http')
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
