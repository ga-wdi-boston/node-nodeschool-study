'use strict';

let http = require('http');
let bl = require('bl');
let array = [];
let num = 0;

function printCorrect () {
  for(let i = 0; i < 3; i++) {
    console.log(array[i]);
  }
}

function collectHttp(index) {
  http.get(process.argv[2 + index], function(res) {
    res.pipe(bl(function(err, data) {
      if(err) {
        console.log(err);
      }
      array[index] = data.toString();
      num++;

      if(num === 3) {
        printCorrect();
      }
    }));
  });
}

for(let i = 0; i < 3; i++) {
  collectHttp(i);
}
