'use strict'

let bl = require('bl');
let http = require('http');
let result = [];
let count = 0;

for (let i = 2; i < process.argv.length; i++) {
  http.get(process.argv[i], function (response) {
    response.pipe(bl(function (err, data) {
      result[i] = data.toString();
      count++;

      if (count === 3) {
        console.log(result[i]);
      }
    }))
  })
}
