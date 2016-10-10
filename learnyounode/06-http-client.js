'use strict';

const http = require('http');

let url = process.argv[2];

const callback = (response) => {
  response.setEncoding('utf8');

  response.on("data", function (data) {
      console.log(data);
  });
};

http.get(url, callback);
