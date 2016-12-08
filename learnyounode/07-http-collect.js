// Write a program that performs an HTTP GET request to a URL provided to you
// as the first command-line argument. Collect all data from the server (not
// just the first "data" event) and then write two lines to the console
// (stdout).
//
// The first line you write should just be an integer representing the number
// of characters received from the server. The second line should contain the
// complete String of characters sent by the server.
// load the http module
// set the URL equal to the 3rd argument
var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res) {
  // set encoding of response to utf8 so it comes back as text
  res.setEncoding('utf8');

  res.pipe(bl(function (err, data) {
    if (err) {
      console.error(err.stack);
    }
    console.log(data.length);
    console.log(data.toString());
  }));


  // for each chunk of data, console.log that chunk
  // res.on('data', function(chunk) {
  //   console.log(chunk);
  // });
});
