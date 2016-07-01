'use strict';

const sumCommandLine = function() {
  let sum = 0;

  for (let i = 2, max = process.argv.length; i < max; i++) {
    sum += Number(process.argv[i]);
  }

  return sum;
};

console.log(sumCommandLine());
