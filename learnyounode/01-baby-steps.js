'use strict';

let sum = 0;

for (let i = 2, max = process.argv.length; i < max; i++) {
  sum += Number(process.argv[i]);
}

console.log(sum);
