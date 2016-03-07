'use strict'

let bl = require('bl');
let http = require('http');
let result = [];
let count = 0;

let print = function() {
  for (let i = 0; i < 3; i++) {
    console.log(result[i]);
  }
}

function httpGet(i) {
  http.get(process.argv[2 + i], function (response) {
    response.pipe(bl(function (err, data) {
      result[i] = data.toString();
      count++;

      if (count === 3) {
        print();
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
