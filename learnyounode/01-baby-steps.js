'use strict';

let summer = (args) => {
  let sum = 0
  for (let i = 0, max = args.length; i < max; i++) {
    let currentVal = Number(args[i]);
    if Number.isInteger(currentVal) {
    sum += currentVal;
  }
  console.log(sum)
}

summer(process.argv);
