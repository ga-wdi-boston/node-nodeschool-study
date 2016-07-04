'use strict';

var http = require('http');

http.get(process.argv[2], (request) => {
    console.log("Success");
    request.setEncoding("utf8");
    request.on("data", function (data) {
      console.log(data);
    })
    request.on('error', (e) => {
      console.log('problem with request: ${e.message}');
    })
});
