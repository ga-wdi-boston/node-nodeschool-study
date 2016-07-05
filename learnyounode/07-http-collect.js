'use strict';
let http = require('http');
let bl = require('bl');
let url = process.argv[2];
http.get(url, (res) => {
  res.pipe(bl((err, data) => {
    let all = data.toString();
    console.log(all.length);
    console.log(all);
  }))
})
