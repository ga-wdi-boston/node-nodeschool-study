'use strict';
let submit = process.argv;
let sum = 0;
for(let i = 2; i<submit.length; i++){
 sum += parseInt(submit[i]);
}
console.log(sum);
