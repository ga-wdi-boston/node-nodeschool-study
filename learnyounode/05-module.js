'use strict';

let fs = require('fs');
let path =require('path');

const readfile = function(err, data, call) {
  if (err) throw error;
  fs.readdir(data);
  call;
  // 
};




module.exports = {readfile};
