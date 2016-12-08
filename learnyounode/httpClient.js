'use strict'
let http = require('http');

let url = process.argv[2];

let httpResponse = http.get(url, (response)=>{
  response.setEncoding("utf8");
  response.on("data",(data)=>{
    console.log(data);
  });
});
