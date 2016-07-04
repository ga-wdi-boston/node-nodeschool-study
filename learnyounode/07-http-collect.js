'use strict'

let http = require('http')
let bl = require('bl')

http.get(process.argv[2], (res)=>{
  res.setEncoding('utf8')
  res.pipe(bl(function (err, data) {
    if (err) throw err;
    console.log(data.toString().length);
    console.log(data.toString());
  }))
})
