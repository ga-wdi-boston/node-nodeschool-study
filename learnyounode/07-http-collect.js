'use strict';

var http = require('http');
let bl = require('bl')

http.get(process.argv[2], (request) => {
  let result = "";
    request.setEncoding("utf8");
    request.pipe(bl(function (err, data) {
    if (err) throw err;
    console.log(data.toString().length);
    console.log(data.toString());
  }))
});
