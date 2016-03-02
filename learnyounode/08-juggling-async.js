'use strict';

var http = require('http');



// http.get only takes one url, so find a way to get all three urls in there
// some sort of for loop?
// grab each url, do the accumulation and
// when all three results collected, print each result



var count = 0;
var results = [];

var getResults = function() {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
};

var httpGet = function(i) {
  http.get(process.argv[2 + i], function callback(response) {

    response.setEncoding('utf-8');
    var dataAcculumator = '';

    response.on('data', function dataListener(data) {
      data = data.toString();
      dataAcculumator += data;
    });

    response.on('error', console.error);

    response.on('end', function endListener(data) {
      results[i] = dataAcculumator;
      count++;
      if (count === 3) {
        getResults();
      }
    });
  });
};

for (var i = 0; i < 3; i++) {
  httpGet(i);
}

