const fs = require('fs');
const path = require('path');

let data = process.argv[2];
let extention = process.argv[3];
let result = [];
fs.readdir(data, (err,data) => {
    if(err){
      console.log(err);
    }



    data.forEach(function(word){
     if(path.extname(word) === "."+extention)
      console.log(word);
    });
  });

// console.log(result);
