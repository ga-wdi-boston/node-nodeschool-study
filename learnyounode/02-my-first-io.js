'use strict';

let fs = require('fs');
// let arr = [];

const syncReader = () => {
  let vars = fs.readFileSync(process.argv[2]).toString().split('\n');
  // console.log(vars.length);
  let minus = vars.length;
  console.log(minus-1);
  // return minus-1;
};


syncReader();

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  
