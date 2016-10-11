'use strict';

const concatStream = require('concat-stream');
const http = require('http');

let urls = process.argv.slice(2,5);

const printData = (response) => {
  response.setEncoding('utf8');

  response.pipe(concatStream(function (data) {
    console.log(data);
  }));
};

const getURL = (url) => {
  http.get(url, printData);
};

const processInput = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      reject();
    }
    resolve(urls);
  });
};

processInput()
.then(() => getURL(urls[0]))
.then(() => getURL(urls[1]))
.then(() => getURL(urls[2]))
.catch(console.error);
