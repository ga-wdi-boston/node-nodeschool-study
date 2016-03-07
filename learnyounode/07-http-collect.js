'use strict';

// http get request to url provided as the first command line argument.
// collect all data from server, first line should be an integer representing the number
// of characters recieved from server, the second line should contain the string of characters


let http = require('http');
let bl = require('bl'); // storage object for for collections of node buffers.

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
