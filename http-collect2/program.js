const fs = require('fs');
const http = require('http');
const bl = require('bl')

let path = process.argv[2];
// let extention = process.argv[3];

http.get(path, (res)=>{
  let fullData
  res.setEncoding('utf8');
  res.pipe(bl(function(err, data){
    fullData = data.toString()

  }));

  let amount = 0;
  res.on("data", function(data){
    if(data){
      let word = data.split('')
      word.forEach(function(letter){
       amount += 1;
      })

    }
  });

  res.on('end', ()=>{
    console.log(amount);
    console.log(fullData);
  });

});
