'use strict';

// console.log(process.argv);
//
// console.log(process.argv.length);
// console.log(process.argv[0]);
// console.log(+process.argv[2]);
// console.log(+process.argv[4]);

let sumNumbers = function () {

let sum = 0;

for (let i = 2; i < process.argv.length ;i++)
  {
  sum = sum + (+process.argv[i]);
  }
console.log(sum);
}

sumNumbers();
