'use strict'

// not working properly

const process = function (a,b,c) {
  let sum = a + b + c;
  let stringSum = sum.toString();
  return stringSum;
};

console.log(process(1,2,3));
