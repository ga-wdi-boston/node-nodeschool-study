'use strict';
var http = require('http');
let url = process.argv[2];
http.get(url, (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  })
})
