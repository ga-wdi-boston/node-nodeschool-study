'use strict';

let http = require('http');

let url = process.argv[2];

http.get(url, function(response) {
  let collector = "";
  response.setEncoding('utf8').on("data", function(data) {
    collector += data;
  }).on('end', () => {
    console.log(collector.length);
    console.log(collector);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
