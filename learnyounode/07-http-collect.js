'use strict';

const http = require('http');
const concat = require('concat-stream');
let url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8')
  let sink = concat(function(data){
    console.log(data.split('').length)
    console.log(data)
  })
  response.pipe(sink)
});
