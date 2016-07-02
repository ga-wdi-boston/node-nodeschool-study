'use strict';

const http = require('http');
const bl = require('bl');
let result = [];
let count = 0;

function printResult() {
  for (let i = 0, max = result.length; i < max; i++)
    console.log(result[i])
}

function httpGetRequest (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err)

      result[index] = data.toString()
      count++

      if (count == 3)
        printResult()
    }))
  })
}

for (let i = 0, max = process.argv.length - 2; i < max; i++)
 httpGetRequest(i)
