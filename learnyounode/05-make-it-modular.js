'use strict';

let fs = require('fs');
let filter = require('./module.js')
filter(process.argv[2], process.argv[3], function(err,data){
  data.forEach(function(file) {
    console.log(file);
  });
});

//not working yet, will try again tomorrow
