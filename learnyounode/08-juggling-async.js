'use strict';

// Use http get, three URL's are provided as the first 3 command-line arguments
// Collect the content provided by the 3 URLS and print data as a string on its own line
// They must be printed in the same order as they are provided as arguments

// googled the results so I would have an example of this
// definitely challenged here

let http = require('http');
let bl = require('bl');
let results = [];
let count = 0;

function printResults () {
  for (let i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);

      results[index] = data.toString();
      count++

      if (count == 3)
        printResults();
    }));
  });
};

for (var i = 0; i < 3; i++) {
  httpGet(i);
};
