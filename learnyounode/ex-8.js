'use strict';

let url = process.argv[2];

let http = require('http');

let collection = "";

http.get(url, function(request) {
  request.setEncoding("utf8");

  request.on("data", function(data) {
    collection += data;
  });
  request.on("end", function(data) {
    console.log(collection.length);
    console.log(collection);
  });
});
