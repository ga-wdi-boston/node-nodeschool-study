'use strict';

let http = require('http');

let url = process.argv[2];

http.get(url, (response) => {
  let stuff = '';
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    stuff += chunk;
    console.log(chunk);
  });
});
