'use strict';

let array = process.argv;
let sum = 0;

for (let i = 2; i < array.length; i++) {
  sum += +array[i];
}

console.log(sum);
