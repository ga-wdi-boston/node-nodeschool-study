'use strict';

let http = require('http');

let url = process.argv[2];

http.get(url, (response) => {
  let stuff = '';
  let count = 0;
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    stuff += chunk;
    count += 1;
  });
  response.on('end', () => {
    let poop = stuff.split('');
    console.log(poop.length);
    console.log(stuff);
  });
});
