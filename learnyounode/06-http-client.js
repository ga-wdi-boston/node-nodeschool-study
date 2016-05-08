'use strict';

let http = require('http');
let stdout = process.stdout;

http.get(process.argv[2], function (response){
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
  });
});
