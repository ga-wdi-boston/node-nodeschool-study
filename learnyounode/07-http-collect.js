'use strict';

let fs = require('fs')
let http = require('http')
let bl = require('bl')
let url = process.argv[2]

http.get(url, (response) => {
  response.pipe(bl(function(err, data) {
    console.log(data.toString().length);
    console.log(data.toString());
  }));
})
