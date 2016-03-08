'use strict'

let http = require("http");
let file = process.argv[2];
let bl = require("bl");

http.get(file, function(response) {
    response.setEncoding('utf8');

    response.on('error', function(err) {
      console.error(err);
    });

    response.pipe(bl(function (err, data) {
      if (err) throw err;
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }));
  });
