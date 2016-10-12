'use strict';

const concatStream = require('concat-stream');

const http = require('http');

let url = process.argv[2];

const callback = (response) => {
  response.setEncoding('utf8');

  response.pipe(concatStream(function (data) {
    console.log(data.length);
    console.log(data);
  }));
};

http.get(url, callback);
