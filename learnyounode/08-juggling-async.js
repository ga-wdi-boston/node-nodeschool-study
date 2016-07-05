'use strict';

let http = require('http');
let concatStream = require('concat-stream');

let urls = process.argv.slice(2),
    results = [],
    resultsCount = 0;

urls.forEach(function (url, i) {
  http.get(url, function (response) {
    response.setEncoding('utf8');

    response.pipe(concatStream(function (data) {
      results[i] = data;
      resultsCount++;

      if (resultsCount === urls.length) {
        results.forEach(function (result) {
          console.log(result);
        });
      }
    }));
  });
});
