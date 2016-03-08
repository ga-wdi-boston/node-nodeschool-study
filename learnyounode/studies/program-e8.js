'use strict'

let http = require("http");
let file = process.argv[2];
let file2 = process.argv[3];
let file3 = process.argv[4];
let bl = require("bl");

http.get(file, function(response) {
    response.setEncoding('utf8');

    response.on('error', function(err) {
      console.error(err);
    });

    response.pipe(bl(function (err, data) {
      if (err) throw err;
      data = data.toString();
      console.log(data);
    }));
  });

http.get(file2, function(response) {
    response.setEncoding('utf8');

    response.on('error', function(err) {
      console.error(err);
    });

    response.pipe(bl(function (err, data) {
      if (err) throw err;
      data = data.toString();
      console.log(data);
    }));
  });

http.get(file3, function(response) {
    response.setEncoding('utf8');

    response.on('error', function(err) {
      console.error(err);
    });

    response.pipe(bl(function (err, data) {
      if (err) throw err;
      data = data.toString();
      console.log(data);
    }));
  });
