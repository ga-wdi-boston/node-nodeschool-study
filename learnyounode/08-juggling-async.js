'use strict';

let bl = require('bl');
let http = require('http');
let results = [];
let count = 0;

let getResults = function() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  };
};

let httpGet = function(i) {
  http.get(process.argv[2 + i], function(response) {
    response.pipe(bl(function(err, data) {
      results[i] = data.toString();
      count++;

      if (count === 3) {
        getResults();
      };
    }));
  });
};

for (let i = 0; i < 3; i++) {
  httpGet(i);
};
