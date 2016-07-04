'use strict'

let http = require('http')
let bl = require('bl')
let resultOne = ""
let resultTwo = ""
let resultThree = ""
let count = 0

http.get(process.argv[2], (res)=>{
  res.setEncoding('utf8')
  res.pipe(bl(function (err, data) {
    if (err) throw err;
    resultOne = data.toString();
  }))
  res.on('end', function(){
    count += 1;
    if(count===3){
      console.log(resultOne);
      console.log(resultTwo);
      console.log(resultThree);
    }
  })
 })

http.get(process.argv[3], (res)=>{
  res.setEncoding('utf8')
  res.pipe(bl(function (err, data) {
    if (err) throw err;
    resultTwo = data.toString();
  }))
  res.on('end', function(){
    count += 1;
    if(count===3){
      console.log(resultOne);
      console.log(resultTwo);
      console.log(resultThree);
    }
  })
})

http.get(process.argv[4], (res)=>{
  res.setEncoding('utf8')
  res.pipe(bl(function (err, data) {
    if (err) throw err;
    resultThree = data.toString();
  }))
  res.on('end', function(){
    count += 1;
    if(count===3){
      console.log(resultOne);
      console.log(resultTwo);
      console.log(resultThree);
    }
  })
})
