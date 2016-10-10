'use strict';

let http = require('http');

let info = [];

let url = process.argv[2];

http.get(url, function(res) {
  res.setEncoding('utf8');

  res.on('data', function(data) {
    info.push(data);
  });

  res.on('end', function() {
    //console.log(info);
    console.log(info.join('').length);
    console.log(info.join(''));
  });
});
