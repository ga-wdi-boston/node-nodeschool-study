'use strict';

// setting variable for addition of all array numbers
let sum = 0;

// for loop to iterate through the process.argv array
for (var i = 2; i < process.argv.length; i++) {
  // setting sum to th added  values of each index of process.argv (in number form)
  sum += Number(process.argv[i]);
}

console.log(sum);
