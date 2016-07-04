'use strict';

let fs = require('fs')
let http = require('http')
let bl = require('bl')
let url = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]

http.get(url, (response) => {
  response.pipe(bl(function(err, data) {
    //console.log(data.toString().length);
    console.log(data.toString());
  }));
})

http.get(url2, (response) => {
  response.pipe(bl(function(err, data) {
    //console.log(data.toString().length);
    console.log(data.toString());
  }));
})

http.get(url3, (response) => {
  response.pipe(bl(function(err, data) {
    //console.log(data.toString().length);
    console.log(data.toString());
  }));
})
