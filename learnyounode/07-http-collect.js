'use strict';
let http = require('http');
let stream = require('stream');

http.get(process.argv[2], function callback(response) {
  let responseData = [];
  let numOfChars = 0;
  response.setEncoding('utf8');
  response.on("data", function (data) {
    responseData.push(data);
    numOfChars += data.length;
  });
  response.on("end", () => {
    console.log(numOfChars);
    console.log(responseData.join(''));
  });
});
