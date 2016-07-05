// Write a program that performs an HTTP GET request to a URL provided to you
//   as the first command-line argument. Collect all data from the server (not
//   just the first "data" event) and then write two lines to the console
//   (stdout).


var http = require('http');
// Use a third-party package to abstract the difficulties involved in
// collecting an entire stream of data.
var bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    // convert from a Buffer.
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
