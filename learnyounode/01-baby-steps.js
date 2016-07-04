'use strict'
let arr = process.argv;
let sum = 0;
for (let i = 2; i < arr.length; i++) {
  sum += Number(arr[i]);
};
console.log(sum);
return sum;
