'use strict';

let http = require('http');

let url = process.argv[2];

let bl = require('bl');

http.get(url, function(response) {
  response.setEncoding("utf8");
  response.pipe(bl(function (err, data) {
    data.toString();
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
