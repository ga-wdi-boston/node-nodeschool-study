'use strict';

let sum = 0;
let numArray = process.argv;
numArray.shift()
numArray.shift()
numArray.forEach((num) => {
  sum += Number(num);
});

console.log(sum);
