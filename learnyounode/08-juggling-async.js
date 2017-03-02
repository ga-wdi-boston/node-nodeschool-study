'use strict';

let http = require('http');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

http.get(url1, (response) => {
  let stuff = '';
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    stuff += chunk;
  });
  response.on('end', () => {
    console.log(stuff);
  });
});

http.get(url2, (response) => {
  let stuff = '';
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    stuff += chunk;
  });
  response.on('end', () => {
    console.log(stuff);
  });
});

http.get(url3, (response) => {
  let stuff = '';
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    stuff += chunk;
  });
  response.on('end', () => {
    console.log(stuff);
  });
});
