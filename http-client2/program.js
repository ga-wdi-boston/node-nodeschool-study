let fs = require('fs');
let http = require('http')

let path = process.argv[2];
// let extention = process.argv[3];

http.get(path, (res)=>{
  res.setEncoding('utf8');
  res.on("data", function(data){
    console.log(data)
  })
} )
