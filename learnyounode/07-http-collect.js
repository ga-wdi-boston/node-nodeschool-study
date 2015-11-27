var http = require('http');
// var bl = require('bl');

http.get(process.argv[2], function(response) {
  var dataAccumulator = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
    dataAccumulator += data;
  });
  response.on('error', function(err) {
    console.error(err);
  });
  response.on('end', function() {
    console.log(dataAccumulator.length);
    console.log(dataAccumulator);
  });
});

/////////////////////////USING NODE PACKAGE BUFFER LIFT/////////////////////////
// http.get(process.argv[2], function(response) {
//    response.pipe(bl(function (err, data) {
//       if(err) {
//         console.error(err);
//       }
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     }));
// });


  // Note that you will probably need to data.toString() to convert from a
  // Buffer.

  // Write a program that performs an HTTP GET request to a URL provided to you
  // as the first command-line argument. Collect all data from the server (not
  // just the first "data" event) and then write two lines to the console
  // (stdout).

  // The first line you write should just be an integer representing the number
  // of characters received from the server. The second line should contain the
  // complete String of characters sent by the server.
