'use strict';


var http = require('http')
var concat = require('concat-stream')

var urls = [];
var data = [];
var responseCount = 0;

// console.log(process.argv);
for (let i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}
// console.log(urls);

urls.forEach(function (url, index) {
  http.get(url, function (request) {
    request.setEncoding('utf8')
    request.pipe(concat(function (result) {
      data[index] = result;
      responseCount++
      if (responseCount === urls.length) {
        console.log(data.join('\n'));
      }
    }))
  })
})
