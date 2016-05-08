'use strict';

let http = require('http');
let stdout = process.stdout;
let buff = []
let count = 0;

http.get(process.argv[2], function (response){
  response.setEncoding('utf8');
  response.on('data', function (data) {
    count += data.length;
    buff.push(data);
  });
  response.on('end', function () {
    console.log(count);
    console.log(buff.join(''));
  });

});
